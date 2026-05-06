

# HELM Chart deploy
helm is package for kuvernettes that makes the deployment easier as compare to kubectl
terraform plan
terraform apply
az aks get-credentials --resource-group fusion-ai-rg --name fusion-ai-aks --overwrite-existing
# Step 3: Use Helm to deploy (this replaces kubectl apply)

Helm gives you:
📝 Templates so you don't hardcode values
🔄 Versioned releases with rollback
Chart The package (folder with templates + values)

# helm Command
helm create mychart          # Scaffold a new chart
helm install NAME ./chart    # Install (first time)
helm upgrade NAME ./chart    # Update existing install
helm uninstall NAME          # Remove
helm list                    # See all your releases
helm status NAME             # Check a release
helm rollback NAME 1         # Roll back to revision 1
helm history NAME            # See all revisions
helm template ./chart        # Preview rendered YAML (no deploy)


# FlOW
helm create chart
# Clean Up: Remove Files We Don't Need
rm chart/templates/hpa.yaml
rm chart/templates/ingress.yaml
rm chart/templates/serviceaccount.yaml
rm -rf chart/templates/tests
rm chart/templates/_helpers.tpl
rm chart/templates/NOTES.txt
rm chart/templates/httproute.yaml

# Before deploying, let's make sure the templates are valid and see what they'll render to:
helm lint chart
# Then Test the Template

# Step 3: Deploy Your App with Helm 🚀
Before we can deploy, Kubernetes needs the Docker image to exist in ACR. So we do:

Build & push image to ACR
Install the Helm chart
Get the public IP
Try a Helm upgrade (see the magic)
See history & rollback capabilities

docker build -t fusion-ai:latest .
docker push fusionaiacr2026v1.azurecr.io/fusion-ai:v1
# verify image is in acr
az acr repository show-tags --name fusionaiacr2026v1 --repository fusion-ai --output table
# 3b. Make Sure kubectl is Connected
kubectl get nodes
Should show a node in Ready state. If not:
az aks get-credentials --resource-group fusion-ai-rg --name fusion-ai-aks --overwrite-existing
# 3c. Install the Helm Chart
helm install fusion-ai ./chart
# 3d. Check What Helm Created
helm list
# See the deploy service
kubectl get service fusion-ai-service
# Check release status
helm status fusion-ai
# Get all values used
helm get values fusion-ai
# See history
helm history fusion-ai
3g. 🪄 THE HELM MAGIC: Easy Upgrade
Let's simulate a real scenario: you want to change something about your deployment.
Scenario 1: Scale to 4 replicas without touching files
bashhelm upgrade fusion-ai ./chart --set replicaCount=4
Check pods:
bashkubectl get pods
You'll see 4 pods now. 🎉
Scenario 2: Scale back
bashhelm upgrade fusion-ai ./chart --set replicaCount=2
Now only 2 pods again.
Check history
bashhelm history fusion-ai

# Rollback
helm rollback fusion-ai 2




# Complete Teardown Commands
# 1. Uninstall the Helm release (removes deployment + service from cluster)
helm uninstall fusion-ai

# 2. Confirm Helm release is gone
helm list

# 3. Confirm Kubernetes resources are gone
kubectl get all

# 5. Navigate to Terraform folder
cd D:/fusion-ai-infra

# 6. Destroy all Azure resources
terraform destroy
# Type: yes

# 7. Verify cleanup in Azure
az group show --name fusion-ai-rg
# Expected: ResourceGroupNotFound error = success


# Complete up Commands

terraform plan
terraform apply
# Step 3: Connect kubectl to AKS
az aks get-credentials --resource-group fusion-ai-rg --name fusion-ai-aks --overwrite-existing
# Verify
kubectl get nodes
helm version

docker ps
docker build -t fusion-ai:latest .
az acr login --name fusionaiacr2026v1
docker tag fusion-ai:latest fusionaiacr2026v1.azurecr.io/fusion-ai:v1
docker push fusionaiacr2026v1.azurecr.io/fusion-ai:v1
az aks get-credentials -n fusion-ai-aks -g fusion-ai-rg --overwrite-existing
helm install fusion-ai ./chart



# Create Service Principal
az ad sp create-for-rbac `
  --name "github-actions-fusion-ai" `
  --role "Contributor" `
  --scopes "/subscriptions/c8bd8aa5-3aba-4806-add2-357985a59ccc/resourceGroups/fusion-ai-rg" `
  --json-auth

# Get the SP's "Object ID" (different from clientId)
az ad sp list --display-name "github-actions-fusion-ai" --query "[].id" -o tsv

#  Give the SP Permission to Push to ACR
az role assignment create --assignee <OBJECT ID> --role "AcrPush" --scope "/subscriptions/c8bd8aa5-3aba-4806-add2-357985a59ccc/resourceGroups/fusion-ai-rg/providers/Microsoft.ContainerRegistry/registries/fusionaiacr2026v1"

# Verify everything
az role assignment list --assignee <OBJECT ID> --output table


# Step 8: Create the GitHub Actions Workflow
>> cd D:/fusion-ai
>> mkdir -p .github/workflows

