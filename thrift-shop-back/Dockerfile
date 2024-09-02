# Build Stage: Use the .NET SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the remaining files and build the app
COPY . ./
RUN dotnet publish -c Release -o /out

# Runtime Stage: Use the .NET runtime to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /out ./

# Expose port 81 to the outside world
EXPOSE 81

# Command to run the app
ENTRYPOINT ["dotnet", "thrift-shop-back.dll"]
