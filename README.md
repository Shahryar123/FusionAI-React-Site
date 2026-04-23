# Build the image
docker build -t fusion-ai:latest .
# Run the container
docker run -p 8080:80 --name fusion-ai fusion-ai:latest





# Stop the container (press Ctrl+C in terminal, or)
docker ps                    # List running containers
docker stop <container_id>   # Stop it

# Run in background instead
docker run -d -p 8080:80 --name fusion-ai fusion-ai:latest

# View logs
docker logs fusion-ai

# Remove container
docker rm -f fusion-ai

# Remove image
docker rmi fusion-ai:latest

# See image size
docker images fusion-ai


# Open PowerShell as Administrator and run:
# Using Chocolatey (if you have it)
choco install terraform
terraform --version
# Download installer from:
# https://learn.microsoft.com/en-us/cli/azure/install-azure-cli

az --version
az login
az account show