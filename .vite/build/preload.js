"use strict";const{contextBridge:n,ipcRenderer:i}=require("electron");n.exposeInMainWorld("electronAPI",{login:e=>i.invoke("login",e)});
