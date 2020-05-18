# Create Vue Component

### a simple but powerfull scaffold creator for vue components.  


#### Installation:

- Clone the repository from [GitHub](https://github.com/biroplane/create-vue-component)
- ```npm link```
- ```create-vue-component```
---

#### Syntax:
``` 
create-vue-component <name> -f
```
Creates a ```<name>``` folder with four files in it:
- ```<name>```.vue (_main scaffold for the component. It joins all the dependecies_)
- ```<name>```.html (_scaffolds all the html part of the vue component)
- ```<name>```.js (_main js component logic_)
- ```<name>```.ctrl.js (_control file, for vuex modules etc.._)
- ```<name>```.scss (_scss with wich imports the "variables" files_)
 

---
#### Option
```
-f | --folder
```

_actually the ```-f or --folder``` parameter is required_