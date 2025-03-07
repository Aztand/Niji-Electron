"use strict";const{contextBridge:s,ipcRenderer:n}=require("electron");s.exposeInMainWorld("electronAPI",{sendMessage:e=>n.send("message",e)});
