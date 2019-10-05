0. fix pretty (extra) - V

1) date validation - upon scope and scope of right sequence in general
2) time validation
3) delete from array and ls
4) bonus - idea for statuses

fix order of loading

//
//
//
//

function timeValid(){
let datenow = dueDate.value.split("-")
let yearFromInput= parseInt(datenow[0])
let dayFromInput = parseInt(datenow[2])
let monthFromInput = parseInt(datenow[1])


{    // Controls if the editor should automatically format the line after typing    
"beautify.onSave": true,    
"editor.formatOnSave": true,    
"editor.defaultFormatter": "esbenp.prettier-vscode",    "liveServer.settings.donotShowInfoMsg": true,   
 // You can auto format any files based on the file extensions type.    
"beautify.JSfiles": [        
    "js",        
    "json",        
    "jsbeautifyrc",        
    "jshintrc",        
    "ts"    ],   
     "[javascript]": {       
         "editor.defaultFormatter": "esbenp.prettier-vscode"    
        }}
