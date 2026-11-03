
import express from "express";
import dns from "node:dns/promises";
import net from "node:net";
const app=express();
app.use(express.static("public"));
app.use(express.json({limit:"8kb"}));
function privateIP(ip){
 if(net.isIP(ip)===4){const a=ip.split(".").map(Number);return a[0]===0||a[0]===10||a[0]===127||a[0]>=224||a[0]===169&&a[1]===254||a[0]===172&&a[1]>=16&&a[1]<=31||a[0]===192&&a[1]===168||a[0]===100&&a[1]>=64&&a[1]<=127;}
 return ip==="::1"||ip==="::"||ip.toLowerCase().startsWith("fc")||ip.toLowerCase().startsWith("fd")||ip.toLowerCase().startsWith("fe80")||ip.toLowerCase().startsWith("::ffff:");
}
app.post("/api/check",async(req,res)=>{
 try{
  const u=new URL(req.body.url);
  if(u.protocol!=="https:"||u.username||u.password||u.port||net.isIP(u.hostname))return res.status(400).json({error:"Yalnızca güvenli HTTPS bağlantıları kabul edilir."});
  const records=await dns.lookup(u.hostname,{all:true});
  if(!records.length||records.some(r=>privateIP(r.address)))return res.status(400).json({error:"Bu adres desteklenmiyor."});
  const host=u.hostname.toLowerCase();
  const platform=host==="youtu.be"||host==="youtube.com"||host.endsWith(".youtube.com")?"YouTube":host==="tiktok.com"||host.endsWith(".tiktok.com")?"TikTok":host==="instagram.com"||host.endsWith(".instagram.com")?"Instagram":host==="facebook.com"||host.endsWith(".facebook.com")?"Facebook":host==="x.com"||host==="twitter.com"?"X":"Diğer";
  res.json({platform,message:"Bağlantı biçimi uygun. Platform bağlantılarından doğrudan indirme henüz desteklenmiyor."});
 }catch{res.status(400).json({error:"Geçerli bir HTTPS bağlantısı girin."});}
});
app.listen(process.env.PORT||3000,"0.0.0.0",()=>console.log("Video İndir hazır"));
