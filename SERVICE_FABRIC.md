# File Changes

Service Fabric should automatically assign a port but in case it seems like you are unable to reach your front end you can manually assign one.
Assign a Port value to your endpoint in the UI `ServiceManifest.xml` file (located at `Carvana.ServiceFabricUITemplate.ServiceFabric/ApplicationPackageRoot/ServiceFabricUITemplatePkg/ServiceManifest.xml`):

```xml
<Endpoint Name="ServiceFabricUITemplateTypeEndpoint" Protocol="http" UriScheme="http" Type="Input" Port="3001" />
```

  * This port should be unique on your cluster (and your machine when running locally)
  * This port should match with other locations in the code where a port is set (e.g. server/index.js)


# Running In Service Fabric

1. Open command line and change location to newly created UI folder (Carvana.ServiceFabricUITemplate/ServiceFabricUITemplate)

2. Run command `npm install`

3. Run command `npm run build:dev`

4. Start Visual Studio running in Administrator mode and open your solution

5. Change your build configuration to Debug | x64

6. Start service fabric from VS by setting Carvana.ServiceFabricUITemplate.ServiceFabric as the start up project and hit Start at the top
    * First time starting you may get a message asking for permissions, Click 'Yes'

7. Then you can either:
    * Navigate to http://localhost:19081/Carvana.ServiceFabricUITemplate.ServiceFabric/ServiceFabricUITemplate to view UI
    * Navigate to http://localhost:19081/Carvana.ServiceFabricUITemplate.ServiceFabric/Carvana.ServiceFabricUITemplate.WebApi/swagger to view Swagger documentation
    * Navigate to http://localhost:19080/Explorer/index.html#/apptype/Carvana.ServiceFabricUITemplate.ServiceFabricType/app/Carvana.ServiceFabricUITemplate.ServiceFabric to view your application running in Service Fabric
