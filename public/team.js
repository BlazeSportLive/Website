const _0x2fbd3f=_0x16af;(function(_0x38e5b2,_0x4985d5){const _0x345af1=_0x16af,_0x20c1f2=_0x38e5b2();while(!![]){try{const _0x4e7635=-parseInt(_0x345af1(0xd8))/(0x18c8+0x1*0x142c+0x25*-0x137)*(-parseInt(_0x345af1(0xb2))/(-0x90*0x11+0x3*-0xa26+0x2804))+-parseInt(_0x345af1(0x116))/(-0x1*-0x282+0x51b+-0x79a)*(parseInt(_0x345af1(0x10c))/(0x1*0xf5a+0xd5e+-0x1cb4))+-parseInt(_0x345af1(0xf6))/(-0x2*0x11c3+0xe*-0xa8+0x2cbb)*(-parseInt(_0x345af1(0x149))/(0x5b9*0x1+-0x24be+-0x1*-0x1f0b))+-parseInt(_0x345af1(0xc1))/(-0x1d8b+-0x26c4+0x4456)+-parseInt(_0x345af1(0x155))/(0x817+-0x1cb2+-0x9*-0x24b)*(-parseInt(_0x345af1(0xd0))/(0x8cc+-0x1*-0xc0b+-0x14ce))+parseInt(_0x345af1(0xe7))/(-0x2*-0x1034+-0x110c*0x2+0x1ba)+-parseInt(_0x345af1(0xfe))/(0x2*-0x824+0x1*-0xd49+0x1d9c);if(_0x4e7635===_0x4985d5)break;else _0x20c1f2['push'](_0x20c1f2['shift']());}catch(_0x329c54){_0x20c1f2['push'](_0x20c1f2['shift']());}}}(_0x4ae8,-0x576*0xa2+-0x843e1+0x116741));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';function _0x16af(_0x120f86,_0x230e19){const _0x5f5900=_0x4ae8();return _0x16af=function(_0x303d28,_0x3fcbdb){_0x303d28=_0x303d28-(-0x4d*-0x1f+-0x287*0x3+-0x115);let _0x1440f4=_0x5f5900[_0x303d28];return _0x1440f4;},_0x16af(_0x120f86,_0x230e19);}import{getDatabase,ref,get}from'https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js';import{getStorage,ref as _0x3d65ac,getDownloadURL}from'https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js';const firebaseConfig={'apiKey':_0x2fbd3f(0xa9)+_0x2fbd3f(0xfd)+_0x2fbd3f(0x13b)+_0x2fbd3f(0xd3)+_0x2fbd3f(0xe6)+_0x2fbd3f(0xc8)+'0nUqA'+_0x2fbd3f(0xed),'authDomain':'sk-re'+_0x2fbd3f(0x118)+_0x2fbd3f(0xe4)+_0x2fbd3f(0x10e)+_0x2fbd3f(0x102)+_0x2fbd3f(0xc2)+_0x2fbd3f(0x108)+_0x2fbd3f(0x147),'databaseURL':'https'+'://sk'+_0x2fbd3f(0x130)+_0x2fbd3f(0xbb)+_0x2fbd3f(0x126)+'e-baa'+_0x2fbd3f(0x101)+_0x2fbd3f(0xd9)+'-rtdb'+'.fire'+'basei'+_0x2fbd3f(0x144),'projectId':_0x2fbd3f(0xe1)+_0x2fbd3f(0x118)+'datab'+_0x2fbd3f(0x10e)+_0x2fbd3f(0x111),'storageBucket':_0x2fbd3f(0xe1)+_0x2fbd3f(0x118)+_0x2fbd3f(0xe4)+_0x2fbd3f(0x10e)+'aa36.'+_0x2fbd3f(0x141)+_0x2fbd3f(0xc9)+'m','messagingSenderId':_0x2fbd3f(0x115)+_0x2fbd3f(0xac)+'59','appId':'1:556'+_0x2fbd3f(0xee)+_0x2fbd3f(0xab)+_0x2fbd3f(0xe8)+_0x2fbd3f(0x12b)+'4b828'+_0x2fbd3f(0x150)+_0x2fbd3f(0x12a)+'a','measurementId':_0x2fbd3f(0x11c)+_0x2fbd3f(0xea)+'J2'},app=initializeApp(firebaseConfig),db=getDatabase(app),storage=getStorage(app),teamRef=ref(db,'Team'),teamSnapshot=await get(teamRef),teamData=[];teamSnapshot[_0x2fbd3f(0xef)+'ch'](_0x469bdf=>{const _0x32ec0c=_0x2fbd3f,_0x146be0={'UIATW':function(_0x2bb34d,_0x487ef5,_0x173058){return _0x2bb34d(_0x487ef5,_0x173058);},'lnnsk':function(_0x5b4f95,_0x238dc7,_0x4d2f22){return _0x5b4f95(_0x238dc7,_0x4d2f22);}},_0x5981fa=_0x146be0['UIATW'](ref,db,'Team/'+_0x469bdf[_0x32ec0c(0xbc)]+'/Name'),_0x166c1e=_0x146be0[_0x32ec0c(0xc4)](ref,db,_0x32ec0c(0xaa)+_0x469bdf['key']+(_0x32ec0c(0x12d)+'onymi'+'c')),_0x2f65fe=_0x146be0[_0x32ec0c(0x11b)](ref,db,_0x32ec0c(0xaa)+_0x469bdf['key']+(_0x32ec0c(0x114)+_0x32ec0c(0xff))),_0x5a8b7b=_0x146be0[_0x32ec0c(0xc4)](ref,db,_0x32ec0c(0xaa)+_0x469bdf[_0x32ec0c(0xbc)]+'/Post'),_0x47adf7=_0x146be0[_0x32ec0c(0x11b)](ref,db,'Team/'+_0x469bdf[_0x32ec0c(0xbc)]+('/ID_I'+_0x32ec0c(0x157)));teamData[_0x32ec0c(0x125)]({'nameRef':_0x5981fa,'patronymicRef':_0x166c1e,'surnameRef':_0x2f65fe,'postRef':_0x5a8b7b,'databaseImageRef':_0x47adf7});});async function createTeamBlock(_0x139aac){const _0x3e37df=_0x2fbd3f,_0x44fb6a={'DDKOU':_0x3e37df(0xdd)+_0x3e37df(0xcb)+'e','WKurk':_0x3e37df(0x13f)+_0x3e37df(0xd6)+'ne','rOerV':_0x3e37df(0xf5),'wcqpn':function(_0x51592f,_0x295c8b){return _0x51592f(_0x295c8b);},'wgdUG':function(_0xd63715,_0x336a10){return _0xd63715(_0x336a10);},'XzSKq':function(_0x9e5766,_0x4defc7){return _0x9e5766(_0x4defc7);}};try{const _0x234478=document[_0x3e37df(0x106)+_0x3e37df(0xb3)+_0x3e37df(0x145)](_0x3e37df(0xc3)+'ist'),_0x46b3b0=document[_0x3e37df(0xda)+_0x3e37df(0xb4)+_0x3e37df(0x14b)]('a');_0x46b3b0[_0x3e37df(0xc5)+_0x3e37df(0xb1)]=_0x3e37df(0xd7)+'flex-'+'col\x20i'+_0x3e37df(0x138)+'cente'+_0x3e37df(0xe2)+'white'+_0x3e37df(0x14e)+_0x3e37df(0x11d)+_0x3e37df(0x158)+_0x3e37df(0xc0)+_0x3e37df(0x15a)+_0x3e37df(0x122)+_0x3e37df(0xe9)+_0x3e37df(0x100)+'w\x20md:'+_0x3e37df(0x151)+_0x3e37df(0xe5)+_0x3e37df(0xe0)+_0x3e37df(0x10a)+_0x3e37df(0x119)+_0x3e37df(0xaf)+_0x3e37df(0xc0)+_0x3e37df(0x143)+'ark:b'+_0x3e37df(0x13a)+_0x3e37df(0x153)+_0x3e37df(0x13e)+_0x3e37df(0xf9)+_0x3e37df(0x14a)+'ay-80'+'0\x20dar'+_0x3e37df(0xfb)+_0x3e37df(0xb0)+_0x3e37df(0x153)+_0x3e37df(0x13e)+_0x3e37df(0x109)+_0x3e37df(0xf7)+_0x3e37df(0xf8)+'/2',_0x46b3b0[_0x3e37df(0x14f)+'HTML']=_0x3e37df(0x10d)+_0x3e37df(0x137)+_0x3e37df(0xfa)+_0x3e37df(0x124)+_0x3e37df(0x107)+_0x3e37df(0x11f)+'t-cov'+'er\x20w-'+_0x3e37df(0x129)+_0x3e37df(0x127)+_0x3e37df(0xdf)+'lg\x20h-'+_0x3e37df(0x12f)+_0x3e37df(0xba)+_0x3e37df(0xbf)+':w-48'+_0x3e37df(0x152)+'ounde'+_0x3e37df(0x123)+_0x3e37df(0xcc)+_0x3e37df(0x127)+_0x3e37df(0x121)+_0x3e37df(0xfc)+'rc=\x22\x22'+_0x3e37df(0xae)+_0x3e37df(0xf3)+_0x3e37df(0x137)+_0x3e37df(0x137)+_0x3e37df(0x117)+_0x3e37df(0x120)+_0x3e37df(0x134)+_0x3e37df(0xec)+_0x3e37df(0xdc)+_0x3e37df(0xe3)+_0x3e37df(0xd4)+'betwe'+_0x3e37df(0x14d)+_0x3e37df(0xb7)+_0x3e37df(0xcd)+_0x3e37df(0xc6)+'l\x22>\x0a\x20'+_0x3e37df(0x137)+_0x3e37df(0x137)+_0x3e37df(0x137)+'<h5\x20c'+'lass='+_0x3e37df(0xb9)+_0x3e37df(0x11a)+_0x3e37df(0xeb)+_0x3e37df(0x140)+_0x3e37df(0x110)+_0x3e37df(0xdb)+_0x3e37df(0x135)+_0x3e37df(0x13c)+_0x3e37df(0xbd)+_0x3e37df(0xc0)+_0x3e37df(0x148)+_0x3e37df(0x133)+_0x3e37df(0x12c)+'hite\x20'+_0x3e37df(0x105)+_0x3e37df(0xd5)+'\x22></h'+_0x3e37df(0x131)+_0x3e37df(0x137)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20<'+'p\x20cla'+_0x3e37df(0xad)+_0x3e37df(0x139)+_0x3e37df(0x136)+_0x3e37df(0xc7)+_0x3e37df(0x11a)+_0x3e37df(0x153)+_0x3e37df(0x13e)+_0x3e37df(0xf9)+_0x3e37df(0xbd)+_0x3e37df(0xc0)+_0x3e37df(0x13d)+_0x3e37df(0xf2)+_0x3e37df(0xb8)+_0x3e37df(0x112)+_0x3e37df(0x142)+_0x3e37df(0x137)+_0x3e37df(0x10b)+_0x3e37df(0xf0)+_0x3e37df(0x10d)+_0x3e37df(0xde),_0x234478[_0x3e37df(0xb6)+_0x3e37df(0xcf)+'d'](_0x46b3b0);const _0x5410ae=_0x46b3b0['query'+_0x3e37df(0x104)+_0x3e37df(0x103)](_0x44fb6a[_0x3e37df(0x12e)]),_0x399e46=_0x46b3b0[_0x3e37df(0xce)+'Selec'+_0x3e37df(0x103)](_0x44fb6a[_0x3e37df(0xd2)]),_0x4936bc=_0x46b3b0[_0x3e37df(0xce)+_0x3e37df(0x104)+_0x3e37df(0x103)](_0x44fb6a[_0x3e37df(0x159)]);if(_0x5410ae&&_0x399e46&&_0x4936bc){const _0x1dfb6a=await get(_0x139aac['nameR'+'ef']),_0x48a9d4=await _0x44fb6a[_0x3e37df(0x10f)](get,_0x139aac['patro'+_0x3e37df(0xca)+_0x3e37df(0x14c)]),_0x5260f1=await _0x44fb6a[_0x3e37df(0xf1)](get,_0x139aac[_0x3e37df(0x146)+'meRef']),_0x5af396=await _0x44fb6a[_0x3e37df(0xb5)](get,_0x139aac[_0x3e37df(0x128)+'ef']),_0x1d1274=_0x1dfb6a[_0x3e37df(0x11e)]()+'\x20'+_0x48a9d4['val']()+'\x20'+_0x5260f1[_0x3e37df(0x11e)]();_0x5410ae[_0x3e37df(0xf4)+'onten'+'t']=_0x1d1274,_0x399e46[_0x3e37df(0xf4)+_0x3e37df(0xf2)+'t']=_0x5af396['val']();const _0x52d1f0=await _0x44fb6a[_0x3e37df(0xb5)](get,_0x139aac[_0x3e37df(0xe4)+_0x3e37df(0xd1)+'ageRe'+'f']),_0x1197da=_0x52d1f0[_0x3e37df(0x11e)](),_0x1b0688=_0x3d65ac(storage,'gs://'+_0x3e37df(0xe1)+_0x3e37df(0x118)+_0x3e37df(0xe4)+_0x3e37df(0x10e)+_0x3e37df(0x102)+'appsp'+_0x3e37df(0xc9)+'m/'+_0x1197da+'.jpeg'),_0x587a67=await _0x44fb6a[_0x3e37df(0xb5)](getDownloadURL,_0x1b0688);_0x4936bc['src']=_0x587a67;}}catch(_0x19be10){console[_0x3e37df(0x113)](_0x3e37df(0xbe)+'а\x20соз'+_0x3e37df(0x132)+_0x3e37df(0x154)+_0x3e37df(0x156)+'анды:',_0x19be10);}}function _0x4ae8(){const _0x4796e1=['96\x20md','-reco','5>\x0a\x20\x20','дания','ark:t','s=\x22fl','ing-t','ont-n','\x20\x20\x20\x20\x20','tems-','b-3\x20f','order','s-jRY','ight\x20','400\x20c','-700\x20','.cont','font-','appsp','>\x0a\x20\x20\x20','100\x20d','o.com','ById','surna','p.com','900\x20d','1032942ysKkEr','bg-gr','ent','Ref','en\x20p-','\x20bord','inner','28539','flex-','\x20md:r','-gray','\x20блок','329288qlyBUm','а\x20ком','mage','rder-','rOerV','200\x20r','AIzaS','Team/','5359:','58453','ss=\x22m','\x20alt=','r:bg-','er:bg','Name','6452qjxVrA','ement','eElem','XzSKq','appen','4\x20lea','tsOne','\x22mb-2',':h-au','rd-da','key','text-','Ошибк','to\x20md','gray-','1312724BHWrdr','fireb','teamL','lnnsk','class','norma','ormal','mT0u3','ot.co','nymic','ingOn','e\x20md:','ding-','query','dChil','45jnWong','aseIm','WKurk','cmSBA','tify-','ngOne','entsO','flex\x20','139htZdaP','fault','creat','track','ex-co','.head','\x20\x20\x20\x20','ed-t-','d:max','sk-re','r\x20bg-','l\x20jus','datab','row\x20m','IZA6B','2333620vtVxab','web:6','d-lg\x20','E1TDH','-2xl\x20','ex\x20fl','hU_k','77584','forEa','/div>','wgdUG','onten','\x22\x22>\x0a\x20','textC','img','10vpjort','1/3\x20m','d:w-1','dark:','\x20\x20\x20<i','k:hov','lg\x22\x20s','yBiyU','6473269GPdJOx','ame','shado','36-de','aa36.','tor','Selec','headi','getEl','ass=\x22','aseap','xl:w-','-w-xl','\x20\x20\x20\x20<','333920WDBbGe','\x0a\x20\x20\x20\x20','ase-b','wcqpn','bold\x20','aa36','\x22></p','error','/Surn','55677','3QlptbN','\x20<div','cord-','\x20hove','\x20text','UIATW','G-14L','er\x20bo','val','objec','\x20clas','ed-s-','ounde','d-non','mg\x20cl','push','tabas','round','postR','full\x20','021a1','a3332','ext-w','/Patr','DDKOU'];_0x4ae8=function(){return _0x4796e1;};return _0x4ae8();}teamData[_0x2fbd3f(0xef)+'ch'](createTeamBlock);