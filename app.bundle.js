(()=>{var Hc=i=>{throw TypeError(i)};var Gd=(i,t,e)=>t.has(i)||Hc("Cannot "+e);var Xn=(i,t,e)=>t.has(i)?Hc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);var Wt=(i,t,e)=>(Gd(i,t,"access private method"),e);var ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,fl=1,yh=2;var $s=1,vh=2,rs=3,An=0,Re=1,on=2,Cn=0,os=1,pl=2,ml=3,gl=4,Mh=5;var Mi=100,Sh=101,bh=102,wh=103,Eh=104,Th=200,Ah=201,Ch=202,Rh=203,_l=204,xl=205,Ih=206,Ph=207,Lh=208,Dh=209,Nh=210,Uh=211,Fh=212,Oh=213,Bh=214,Ur=0,Fr=1,Or=2,qi=3,Br=4,zr=5,kr=6,Vr=7,yl=0,zh=1,kh=2,mn=0,vl=1,Ml=2,Sl=3,bl=4,wl=5,El=6,Tl=7;var Al=300,ri=301,Si=302,_o=303,xo=304,Ks=306,Gr=1e3,bn=1001,Hr=1002,we=1003,Vh=1004;var Js=1005;var Ae=1006,yo=1007;var oi=1008;var Xe=1009,Cl=1010,Rl=1011,as=1012,vo=1013,gn=1014,_n=1015,xn=1016,Mo=1017,So=1018,ls=1020,Il=35902,Pl=35899,Ll=1021,Dl=1022,an=1023,wn=1026,ai=1027,Nl=1028,bo=1029,li=1030,wo=1031;var Eo=1033,js=33776,Qs=33777,tr=33778,er=33779,To=35840,Ao=35841,Co=35842,Ro=35843,Io=36196,Po=37492,Lo=37496,Do=37488,No=37489,nr=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Vo=37813,Go=37814,Ho=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,$o=37821,Ko=36492,Jo=36494,jo=36495,Qo=36283,ta=36284,ir=36285,ea=36286;var Cs=2300,Wr=2301,Dr=2302,rl=2303,ol=2400,al=2401,ll=2402;var Gh=3200;var na=0,Hh=1,zn="",ke="srgb",Rs="srgb-linear",Is="linear",Jt="srgb";var Nr=7680;var Wh=519,Xh=512,qh=513,Yh=514,ia=515,Zh=516,$h=517,sa=518,Kh=519,Jh=35044;var Ul="300 es",fn=2e3,Yi=2001;function Hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){let i=Ps("canvas");return i.style.display="block",i}var Wc={},Zi=null;function Fl(...i){let t="THREE."+i.shift();Zi?Zi("log",t,...i):console.log(t,...i)}function Qh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=Qh(i);let t="THREE."+i.shift();if(Zi)Zi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=Qh(i);let t="THREE."+i.shift();if(Zi)Zi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _i(...i){let t=i.join(" ");t in Wc||(Wc[t]=!0,Ct(...i))}function tu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var eu={[Ur]:Fr,[Or]:kr,[Br]:Vr,[qi]:zr,[Fr]:Ur,[kr]:Or,[Vr]:Br,[zr]:qi},pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,Ts=Math.PI/180,$i=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ol(i,t){return(i%t+t)%t}function Xd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qd(i,t,e){return i!==t?(e-i)/(t-i):0}function As(i,t,e){return(1-e)*i+e*t}function Yd(i,t,e,n){return As(i,t,1-Math.exp(-e*n))}function Zd(i,t=1){return t-Math.abs(Ol(i,t*2)-t)}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jd(i,t){return i+Math.random()*(t-i)}function Qd(i){return i*(.5-Math.random())}function tf(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ef(i){return i*Ts}function nf(i){return i*$i}function sf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function af(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),m=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*h,a*c);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sr={DEG2RAD:Ts,RAD2DEG:$i,generateUUID:cs,clamp:zt,euclideanModulo:Ol,mapLinear:Xd,inverseLerp:qd,lerp:As,damp:Yd,pingpong:Zd,smoothstep:$d,smootherstep:Kd,randInt:Jd,randFloat:jd,randFloatSpread:Qd,seededRandom:tf,degToRad:ef,radToDeg:nf,isPowerOfTwo:sf,ceilPowerOfTwo:rf,floorPowerOfTwo:of,setQuaternionFromProperEuler:af,normalize:ze,denormalize:Wi},Gl=class Gl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gl.prototype.isVector2=!0;var It=Gl,Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==m||h!==_){let p=l*u+c*m+h*_+f*v;p<0&&(u=-u,m=-m,_=-_,v=-v,p=-p);let d=1-a;if(p<.9995){let E=Math.acos(p),I=Math.sin(E);d=Math.sin(d*E)/I,a=Math.sin(a*E)/I,l=l*d+u*a,c=c*d+m*a,h=h*d+_*a,f=f*d+v*a}else{l=l*d+u*a,c=c*d+m*a,h=h*d+_*a,f=f*d+v*a;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*m-c*u,t[e+1]=l*_+h*u+c*f-a*m,t[e+2]=c*_+h*m+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"YZX":this._x=u*h*f+c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f-u*m*_;break;case"XZY":this._x=u*h*f-c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f+u*m*_;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hl=class Hl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hl.prototype.isVector3=!0;var L=Hl,Oa=new L,qc=new Ke,Wl=class Wl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],_=n[8],v=s[0],p=s[3],d=s[6],E=s[1],I=s[4],M=s[7],S=s[2],b=s[5],A=s[8];return r[0]=o*v+a*E+l*S,r[3]=o*p+a*I+l*b,r[6]=o*d+a*M+l*A,r[1]=c*v+h*E+f*S,r[4]=c*p+h*I+f*b,r[7]=c*d+h*M+f*A,r[2]=u*v+m*E+_*S,r[5]=u*p+m*I+_*b,r[8]=u*d+m*M+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,m=c*r-o*l,_=e*f+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;var Dt=Wl,Ba=new Dt,Yc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){let i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Jt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Jt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var Ht=lf();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pi,Xr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=Ps("canvas")),Pi.width=t.width,Pi.height=t.height;let s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cf=0,Ki=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var hf=0,ka=new L,Ve=class i extends pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=Ae,o=oi,a=an,l=Xe,c=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=cs(),this.name="",this.source=new Ki(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Al;Ve.DEFAULT_ANISOTROPY=1;var Xl=class Xl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,M=(m+1)/2,S=(d+1)/2,b=(h+u)/4,A=(f+v)/4,x=(_+p)/4;return I>M&&I>S?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=b/n,r=A/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(f-v)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xl.prototype.isVector4=!0;var ce=Xl,qr=class extends pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ve(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ki(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends qr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ls=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yr=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,s,r,o,a,l,c,h,f,u,m,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,m,_,v,p)}set(t,e,n,s,r,o,a,l,c,h,f,u,m,_,v,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,m=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,m=l*f,_=c*h,v=c*f;e[0]=u+v*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,m=l*f,_=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,m=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=_*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+_,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uf,t,df)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),qn.crossVectors(n,Ye),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),qn.crossVectors(n,Ye)),qn.normalize(),dr.crossVectors(Ye,qn),s[0]=qn.x,s[4]=dr.x,s[8]=Ye.x,s[1]=qn.y,s[5]=dr.y,s[9]=Ye.y,s[2]=qn.z,s[6]=dr.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],E=n[3],I=n[7],M=n[11],S=n[15],b=s[0],A=s[4],x=s[8],w=s[12],P=s[1],N=s[5],O=s[9],R=s[13],C=s[2],B=s[6],W=s[10],X=s[14],nt=s[3],q=s[7],j=s[11],tt=s[15];return r[0]=o*b+a*P+l*C+c*nt,r[4]=o*A+a*N+l*B+c*q,r[8]=o*x+a*O+l*W+c*j,r[12]=o*w+a*R+l*X+c*tt,r[1]=h*b+f*P+u*C+m*nt,r[5]=h*A+f*N+u*B+m*q,r[9]=h*x+f*O+u*W+m*j,r[13]=h*w+f*R+u*X+m*tt,r[2]=_*b+v*P+p*C+d*nt,r[6]=_*A+v*N+p*B+d*q,r[10]=_*x+v*O+p*W+d*j,r[14]=_*w+v*R+p*X+d*tt,r[3]=E*b+I*P+M*C+S*nt,r[7]=E*A+I*N+M*B+S*q,r[11]=E*x+I*O+M*W+S*j,r[15]=E*w+I*R+M*X+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15],E=l*m-c*u,I=a*m-c*f,M=a*u-l*f,S=o*m-c*h,b=o*u-l*h,A=o*f-a*h;return e*(v*E-p*I+d*M)-n*(_*E-p*S+d*b)+s*(_*I-v*S+d*A)-r*(_*M-v*b+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],E=e*a-n*o,I=e*l-s*o,M=e*c-r*o,S=n*l-s*a,b=n*c-r*a,A=s*c-r*l,x=h*v-f*_,w=h*p-u*_,P=h*d-m*_,N=f*p-u*v,O=f*d-m*v,R=u*d-m*p,C=E*R-I*O+M*N+S*P-b*w+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return t[0]=(a*R-l*O+c*N)*B,t[1]=(s*O-n*R-r*N)*B,t[2]=(v*A-p*b+d*S)*B,t[3]=(u*b-f*A-m*S)*B,t[4]=(l*P-o*R-c*w)*B,t[5]=(e*R-s*P+r*w)*B,t[6]=(p*M-_*A-d*I)*B,t[7]=(h*A-u*M+m*I)*B,t[8]=(o*O-a*P+c*x)*B,t[9]=(n*P-e*O-r*x)*B,t[10]=(_*b-v*M+d*E)*B,t[11]=(f*M-h*b-m*E)*B,t[12]=(a*w-o*N-l*x)*B,t[13]=(e*N-n*w+s*x)*B,t[14]=(v*I-_*S-p*E)*B,t[15]=(h*S-f*I+u*E)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,m=r*h,_=r*f,v=o*h,p=o*f,d=a*f,E=l*c,I=l*h,M=l*f,S=n.x,b=n.y,A=n.z;return s[0]=(1-(v+d))*S,s[1]=(m+M)*S,s[2]=(_-I)*S,s[3]=0,s[4]=(m-M)*b,s[5]=(1-(u+d))*b,s[6]=(p+E)*b,s[7]=0,s[8]=(_+I)*A,s[9]=(p-E)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Li.set(s[0],s[1],s[2]).length(),a=Li.set(s[4],s[5],s[6]).length(),l=Li.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hn.copy(this);let c=1/o,h=1/a,f=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=fn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===fn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Yi)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===fn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Yi)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var At=go,Li=new L,hn=new At,uf=new L(0,0,0),df=new L(1,1,1),qn=new L,dr=new L,Ye=new L,$c=new At,Kc=new Ke,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ff=0,Jc=new L,Di=new Ke,Pn=new At,fr=new L,Ms=new L,pf=new L,mf=new Ke,jc=new L(1,0,0),Qc=new L(0,1,0),th=new L(0,0,1),eh={type:"added"},gf={type:"removed"},Ni={type:"childadded",child:null},Va={type:"childremoved",child:null},Ce=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new On,n=new Ke,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Dt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ms,fr,this.up):Pn.lookAt(fr,Ms,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Pn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gf),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new L(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},_f={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=Ol(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ga(o,r,t+1/3),this.g=Ga(o,r,t),this.b=Ga(o,r,t-1/3)}return Ht.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=nu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Ht.workingToColorSpace(Ne.copy(this),t),Math.round(zt(Ne.r*255,0,255))*65536+Math.round(zt(Ne.g*255,0,255))*256+Math.round(zt(Ne.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ke){Ht.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(pr);let n=As(Yn.h,pr.h,e),s=As(Yn.s,pr.s,e),r=As(Yn.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Lt;Lt.NAMES=nu;var Ds=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},un=new L,Ln=new L,Ha=new L,Dn=new L,Ui=new L,Fi=new L,nh=new L,Wa=new L,Xa=new L,qa=new L,Ya=new ce,Za=new ce,$a=new ce,Jn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Ln.subVectors(n,e),Ha.subVectors(t,e);let o=un.dot(un),a=un.dot(Ln),l=un.dot(Ha),c=Ln.dot(Ln),h=Ln.dot(Ha),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ya.setScalar(0),Za.setScalar(0),$a.setScalar(0),Ya.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,n),$a.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ya,r.x),o.addScaledVector(Za,r.y),o.addScaledVector($a,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Ln.subVectors(t,e),un.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ui.subVectors(s,n),Fi.subVectors(r,n),Wa.subVectors(t,n);let l=Ui.dot(Wa),c=Fi.dot(Wa);if(l<=0&&c<=0)return e.copy(n);Xa.subVectors(t,s);let h=Ui.dot(Xa),f=Fi.dot(Xa);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ui,o);qa.subVectors(t,r);let m=Ui.dot(qa),_=Fi.dot(qa);if(_>=0&&m<=_)return e.copy(r);let v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Fi,a);let p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return nh.subVectors(r,s),a=(f-h)/(f-h+(m-_)),e.copy(s).addScaledVector(nh,a);let d=1/(p+v+u);return o=v*d,a=u*d,e.copy(n).addScaledVector(Ui,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},En=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),gr.subVectors(this.max,Ss),Oi.subVectors(t.a,Ss),Bi.subVectors(t.b,Ss),zi.subVectors(t.c,Ss),Zn.subVectors(Bi,Oi),$n.subVectors(zi,Bi),fi.subVectors(Oi,zi);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!Ka(e,Oi,Bi,zi,gr)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,Oi,Bi,zi,gr))?!1:(_r.crossVectors(Zn,$n),e=[_r.x,_r.y,_r.z],Ka(e,Oi,Bi,zi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Nn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,mr=new En,Oi=new L,Bi=new L,zi=new L,Zn=new L,$n=new L,fi=new L,Ss=new L,gr=new L,_r=new L,pi=new L;function Ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ge=new L,xr=new It,xf=0,rn=class extends pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Us=class extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},yf=new En,bs=new L,Ja=new L,xi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Ja)),this.expandByPoint(bs.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vf=0,nn=new At,ja=new Ce,ki=new L,Ze=new En,ws=new En,be=new L,Fe=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hd(t)?Us:Ns)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ze.min,ws.min),Ze.expandByPoint(be),be.addVectors(Ze.max,ws.max),Ze.expandByPoint(be)):(Ze.expandByPoint(ws.min),Ze.expandByPoint(ws.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),be.add(ki)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new L,l[x]=new L;let c=new L,h=new L,f=new L,u=new It,m=new It,_=new It,v=new L,p=new L;function d(x,w,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,P),h.sub(c),f.sub(c),m.sub(u),_.sub(u);let N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(N),a[x].add(v),a[w].add(v),a[P].add(v),l[x].add(p),l[w].add(p),l[P].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,w=E.length;x<w;++x){let P=E[x],N=P.start,O=P.count;for(let R=N,C=N+O;R<C;R+=3)d(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let I=new L,M=new L,S=new L,b=new L;function A(x){S.fromBufferAttribute(s,x),b.copy(S);let w=a[x];I.copy(w),I.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(b,w);let N=M.dot(l[x])<0?-1:1;o.setXYZW(x,I.x,I.y,I.z,N)}for(let x=0,w=E.length;x<w;++x){let P=E[x],N=P.start,O=P.count;for(let R=N,C=N+O;R<C;R+=3)A(t.getX(R+0)),A(t.getX(R+1)),A(t.getX(R+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let d=0;d<h;d++)u[_++]=c[m++]}return new rn(u,h,f)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qa=new L,Mf=new L,Sf=new Dt,$e=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qa.subVectors(n,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sf.getNormalMatrix(t),s=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bf=0,Bn=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=os,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $e().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Un=new L,tl=new L,yr=new L,vr=new L,jn=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=vr.dot(this.direction),l=-vr.dot(yr),c=vr.lengthSq(),h=Math.abs(1-o*o),f,u,m,_;if(h>0)if(f=o*l-a,u=o*a-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let v=1/h;f*=v,u*=v,m=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(tl).addScaledVector(yr,u),m}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,m=t.z-o.z,_=e.x-o.x,v=e.y-o.y,p=e.z-o.z,d=n.x-o.x,E=n.y-o.y,I=n.z-o.z,M=Math.abs(l),S=Math.abs(c),b=Math.abs(h),A,x,w,P,N,O,R,C,B,W,X,nt;if(M>=S&&M>=b?(w=l,O=f,B=_,nt=d,l>=0?(A=c,x=h,P=u,N=m,R=v,C=p,W=E,X=I):(A=h,x=c,P=m,N=u,R=p,C=v,W=I,X=E)):S>=b?(w=c,O=u,B=v,nt=E,c>=0?(A=h,x=l,P=m,N=f,R=p,C=_,W=I,X=d):(A=l,x=h,P=f,N=m,R=_,C=p,W=d,X=I)):(w=h,O=m,B=p,nt=I,h>=0?(A=l,x=c,P=f,N=u,R=_,C=v,W=d,X=E):(A=c,x=l,P=u,N=f,R=v,C=_,W=E,X=d)),w===0)return null;let q=A/w,j=x/w,tt=1/w,Mt=P-q*O,Et=N-j*O,ne=R-q*B,Xt=C-j*B,Zt=W-q*nt,Z=X-j*nt,Q=Zt*Xt-Z*ne,_t=Mt*Z-Et*Zt,Nt=ne*Et-Xt*Mt;if(s){if(Q<0||_t<0||Nt<0)return null}else if((Q<0||_t<0||Nt<0)&&(Q>0||_t>0||Nt>0))return null;let mt=Q+_t+Nt;if(mt===0)return null;let Bt=tt*(Q*O+_t*B+Nt*nt);return(mt>0?Bt<0:Bt>0)?null:this.at(Bt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ih=new At,mi=new jn,Mr=new xi,sh=new L,Sr=new L,br=new L,wr=new L,el=new L,Er=new L,rh=new L,Tr=new L,Ee=class extends Ce{constructor(t=new Fe,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(el.fromBufferAttribute(f,t),o?Er.addScaledVector(el,h):Er.addScaledVector(el.sub(e),h))}e.add(Er)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Mr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Mr,sh)===null||mi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),mi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let p=u[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),I=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,S=I;M<S;M+=3){let b=a.getX(M),A=a.getX(M+1),x=a.getX(M+2);s=Ar(this,d,t,n,c,h,f,b,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){let E=a.getX(p),I=a.getX(p+1),M=a.getX(p+2);s=Ar(this,o,t,n,c,h,f,E,I,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let p=u[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),I=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,S=I;M<S;M+=3){let b=M,A=M+1,x=M+2;s=Ar(this,d,t,n,c,h,f,b,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){let E=p,I=p+1,M=p+2;s=Ar(this,o,t,n,c,h,f,E,I,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wf(i,t,e,n,s,r,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===An,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:i}}function Ar(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Sr),i.getVertexPosition(l,br),i.getVertexPosition(c,wr);let h=wf(i,t,e,n,Sr,br,wr,rh);if(h){let f=new L;Jn.getBarycoord(rh,Sr,br,wr,f),s&&(h.uv=Jn.getInterpolatedAttribute(s,a,l,c,f,new It)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,a,l,c,f,new It)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Jn.getNormal(Sr,br,wr,u.normal),h.face=u,h.barycoord=f}return h}var Zr=class extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,l,c=we,h=we,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=new xi,Ef=new It(.5,.5),Cr=new L,Qi=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,o=new $e){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],m=r[7],_=r[8],v=r[9],p=r[10],d=r[11],E=r[12],I=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,m-h,d-_,S-E).normalize(),s[1].setComponents(c+o,m+h,d+_,S+E).normalize(),s[2].setComponents(c+a,m+f,d+v,S+I).normalize(),s[3].setComponents(c-a,m-f,d-v,S-I).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,m-u,d-p,S-M).normalize();else if(s[4].setComponents(c-l,m-u,d-p,S-M).normalize(),e===fn)s[5].setComponents(c+l,m+u,d+p,S+M).normalize();else if(e===Yi)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);let e=Ef.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yi=class extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$r=new L,Kr=new L,oh=new At,Es=new jn,Rr=new xi,nl=new L,ah=new L,Fs=class extends Ce{constructor(t=new Fe,e=new yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)$r.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$r.distanceTo(Kr);t.setAttribute("lineDistance",new ue(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;oh.copy(s).invert(),Es.copy(t.ray).applyMatrix4(oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){let d=h.getX(v),E=h.getX(v+1),I=Ir(this,t,Es,l,d,E,v);I&&e.push(I)}if(this.isLineLoop){let v=h.getX(_-1),p=h.getX(m),d=Ir(this,t,Es,l,v,p,_-1);d&&e.push(d)}}else{let m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){let d=Ir(this,t,Es,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){let v=Ir(this,t,Es,l,_-1,m,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ir(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if($r.fromBufferAttribute(a,s),Kr.fromBufferAttribute(a,r),e.distanceSqToSegment($r,Kr,nl,ah)>n)return;nl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nl);if(!(c<t.near||c>t.far))return{distance:c,point:ah.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var lh=new L,ch=new L,Jr=class extends Fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lh.fromBufferAttribute(e,s),ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lh.distanceTo(ch);t.setAttribute("lineDistance",new ue(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Os=class extends Fs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Bs=class extends Ve{constructor(t=[],e=ri,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zs=class extends Ve{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Ve{constructor(t,e,n=gn,s,r,o,a=we,l=we,c,h=wn,f=1){if(h!==wn&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ki(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jr=class extends Qn{constructor(t,e=gn,n=ri,s,r,o=we,a=we,l,c=wn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ks=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ts=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function _(v,p,d,E,I,M,S,b,A,x,w){let P=M/A,N=S/x,O=M/2,R=S/2,C=b/2,B=A+1,W=x+1,X=0,nt=0,q=new L;for(let j=0;j<W;j++){let tt=j*N-R;for(let Mt=0;Mt<B;Mt++){let Et=Mt*P-O;q[v]=Et*E,q[p]=tt*I,q[d]=C,c.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[d]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(Mt/A),f.push(1-j/x),X+=1}}for(let j=0;j<x;j++)for(let tt=0;tt<A;tt++){let Mt=u+tt+B*j,Et=u+tt+B*(j+1),ne=u+(tt+1)+B*(j+1),Xt=u+(tt+1)+B*j;l.push(Mt,Et,Xt),l.push(Et,ne,Xt),nt+=6}a.addGroup(m,nt,w),m+=nt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vs=class i extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],m=[],_=0,v=[],p=n/2,d=0;E(),o===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(m,2));function E(){let M=new L,S=new L,b=0,A=(e-t)/n;for(let x=0;x<=r;x++){let w=[],P=x/r,N=P*(e-t)+t;for(let O=0;O<=s;O++){let R=O/s,C=R*l+a,B=Math.sin(C),W=Math.cos(C);S.x=N*B,S.y=-P*n+p,S.z=N*W,f.push(S.x,S.y,S.z),M.set(B,A,W).normalize(),u.push(M.x,M.y,M.z),m.push(R,1-P),w.push(_++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let P=v[w][x],N=v[w+1][x],O=v[w+1][x+1],R=v[w][x+1];(t>0||w!==0)&&(h.push(P,N,R),b+=3),(e>0||w!==r-1)&&(h.push(N,O,R),b+=3)}c.addGroup(d,b,0),d+=b}function I(M){let S=_,b=new It,A=new L,x=0,w=M===!0?t:e,P=M===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*P,0),u.push(0,P,0),m.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let C=O/s*l+a,B=Math.cos(C),W=Math.sin(C);A.x=w*W,A.y=p*P,A.z=w*B,f.push(A.x,A.y,A.z),u.push(0,P,0),b.x=B*.5+.5,b.y=W*.5*P+.5,m.push(b.x,b.y),_++}for(let O=0;O<s;O++){let R=S+O,C=N+O;M===!0?h.push(C,C+1,R):h.push(C+1,C,R),x+=3}c.addGroup(d,x,M===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vi=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,m=[],_=[],v=[],p=[];for(let d=0;d<h;d++){let E=d*u-o;for(let I=0;I<c;I++){let M=I*f-r;_.push(M,-E,0),v.push(0,0,1),p.push(I/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let I=E+c*d,M=E+c*(d+1),S=E+1+c*(d+1),b=E+1+c*d;m.push(I,M,b),m.push(M,S,b)}this.setIndex(m),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hh(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=bi(i[e]);for(let s in n)t[s]=n[s]}return t}function hh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var iu={clone:bi,merge:Oe},Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new At().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qr=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},es=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var to=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function il(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case al:r=t,a=2*e-n;break;case ll:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case al:o=t,l=2*n-e;break;case ll:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),v=_*_,p=v*_,d=-u*p+2*u*v-u*_,E=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*_+1,I=(-1-m)*p+(1.5+m)*v+.5*_,M=m*p-m*v;for(let S=0;S!==a;++S)r[S]=d*o[h+S]+E*o[c+S]+I*o[l+S]+M*o[f+S];return r}},io=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},so=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends ti{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-e)/(s-e),v=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*_;return r}let u=a*2,m=t-1;for(let _=0;_!==a;++_){let v=o[c+_],p=o[l+_],d=m*u+_*2,E=f[d],I=f[d+1],M=t*u+_*2,S=h[M],b=h[M+1],A=If(n,e,E,S,s);r[_]=su(A,v,I,b,p)}return r}};function su(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Rf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function If(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=su(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Rf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vi(e,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vi(t.times,Array),values:Vi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),il(t.settings)&&(n.settings={inTangents:Vi(t.settings.inTangents,Array),outTangents:Vi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case Wr:e=this.InterpolantFactoryMethodLinear;break;case Dr:e=this.InterpolantFactoryMethodSmooth;break;case rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return Dr;case this.InterpolantFactoryMethodBezier:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;il(this.settings)&&(uh(this.settings.inTangents,t),uh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Pt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,m=f+n;for(let _=0;_!==n;++_){let v=e[f+_];if(v!==e[u+_]||v!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=Wr;var ei=class extends je{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Cs;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="color";var ao=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="number";var lo=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gs=class extends je{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends je{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Cs;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ru=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:ru,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ws=class extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sl=new At,dh=new L,fh=new L,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Yi||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pr=new L,Lr=new Ke,Sn=new L,Xs=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Lr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Lr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new L,ph=new It,mh=new It,Ue=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ns=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cl=class extends fo{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new cl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gi=-90,Hi=1,po=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Gi,Hi,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Gi,Hi,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Gi,Hi,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Gi,Hi,t,e);a.layers=this.layers,this.add(a);let l=new Ue(Gi,Hi,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Gi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},mo=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zl="\\[\\]\\.:\\/",Pf=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",Lf="[^"+zl.replace("\\.","")+"]",Df=/((?:WC+[\/:])*)/.source.replace("WC",kl),Nf=/(WCOD+)?/.source.replace("WCOD",Lf),Uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),Ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Of=new RegExp("^"+Df+Nf+Uf+Ff+"$"),Bf=["material","materials","bones","map"],hl=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(t){let e=Of.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=hl;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);var gh=new At,is=class{constructor(t,e,n=0,s=1/0){this.ray=new jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return ul(t,this,n,e),n.sort(_h),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ul(t[s],this,n,e);return n.sort(_h),n}};function _h(i,t){return i.distance-t.distance}function ul(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ul(r[o],t,e,!0)}}var ss=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ql=class ql{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ql.prototype.isMatrix2=!0;var dl=ql;var Ys=class extends Jr{constructor(t=10,e=10,n=4473924,s=8947848){n=new Lt(n),s=new Lt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,m=0,_=-a;u<=e;u++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);let v=u===r?n:s;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}let h=new Fe;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));let f=new yi({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Zs=class extends pn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Vl(i,t,e,n){let s=zf(n);switch(e){case Ll:return i*t;case Nl:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case li:return i*t*2/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case To:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Po:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case nr:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Jo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ir:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zf(i){switch(i){case Xe:case Cl:return{byteLength:1,components:1};case as:case Rl:case xn:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case gn:case vo:case _n:return{byteLength:4,components:1};case Il:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Au(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){let _=f[u],v=f[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,f[u]=v)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){let v=f[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Gf,alphahash_pars_fragment:Hf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Zf,aomap_pars_fragment:$f,batching_pars_vertex:Kf,batching_vertex:Jf,begin_vertex:jf,beginnormal_vertex:Qf,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Np,envmap_vertex:wp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Cp,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Dp,lights_toon_fragment:Up,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:kp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Hp,lightprobes_pars_fragment:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:$p,map_pars_fragment:Kp,map_particle_fragment:Jp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:_m,premultiplied_alpha_fragment:xm,project_vertex:ym,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Im,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Um,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:km,worldpos_vertex:Vm,background_vert:Gm,background_frag:Hm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:$m,distance_vert:Km,distance_frag:Jm,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:_g,shadow_vert:xg,shadow_frag:yg,sprite_vert:vg,sprite_frag:Mg},ht={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},In={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};In.physical={uniforms:Oe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var ra={r:0,b:0,g:0},Sg=new At,Cu=new Dt;Cu.set(-1,0,0,0,1,0,0,0,1);function bg(i,t,e,n,s,r){let o=new Lt(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function m(E){let I=E.isScene===!0?E.background:null;if(I&&I.isTexture){let M=E.backgroundBlurriness>0;I=t.get(I,M)}return I}function _(E){let I=!1,M=m(E);M===null?p(o,a):M&&M.isColor&&(p(M,1),I=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,I){let M=m(I);M&&(M.isCubeTexture||M.mapping===Ks)?(c===void 0&&(c=new Ee(new ts(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:bi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cu),c.material.toneMapped=Ht.getTransfer(M.colorSpace)!==Jt,(h!==M||f!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ee(new vi(2,2),new Je({name:"BackgroundMaterial",uniforms:bi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(M.colorSpace)!==Jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,I){E.getRGB(ra,Bl(i)),e.buffers.color.setClear(ra.r,ra.g,ra.b,I,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,I=1){o.set(E),a=I,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,p(o,a)},render:_,addToRenderList:v,dispose:d}}function wg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(N,O,R,C,B){let W=!1,X=f(N,C,R,O);r!==X&&(r=X,c(r.object)),W=m(N,C,R,B),W&&_(N,C,R,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(N,O,R,C),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,O,R,C){let B=C.wireframe===!0,W=n[O.id];W===void 0&&(W={},n[O.id]=W);let X=N.isInstancedMesh===!0?N.id:0,nt=W[X];nt===void 0&&(nt={},W[X]=nt);let q=nt[R.id];q===void 0&&(q={},nt[R.id]=q);let j=q[B];return j===void 0&&(j=u(l()),q[B]=j),j}function u(N){let O=[],R=[],C=[];for(let B=0;B<e;B++)O[B]=0,R[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:R,attributeDivisors:C,object:N,attributes:{},index:null}}function m(N,O,R,C){let B=r.attributes,W=O.attributes,X=0,nt=R.getAttributes();for(let q in nt)if(nt[q].location>=0){let tt=B[q],Mt=W[q];if(Mt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==C}function _(N,O,R,C){let B={},W=O.attributes,X=0,nt=R.getAttributes();for(let q in nt)if(nt[q].location>=0){let tt=W[q];tt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),B[q]=Mt,X++}r.attributes=B,r.attributesNum=X,r.index=C}function v(){let N=r.newAttributes;for(let O=0,R=N.length;O<R;O++)N[O]=0}function p(N){d(N,0)}function d(N,O){let R=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;R[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),B[N]!==O&&(i.vertexAttribDivisor(N,O),B[N]=O)}function E(){let N=r.newAttributes,O=r.enabledAttributes;for(let R=0,C=O.length;R<C;R++)O[R]!==N[R]&&(i.disableVertexAttribArray(R),O[R]=0)}function I(N,O,R,C,B,W,X){X===!0?i.vertexAttribIPointer(N,O,R,B,W):i.vertexAttribPointer(N,O,R,C,B,W)}function M(N,O,R,C){v();let B=C.attributes,W=R.getAttributes(),X=O.defaultAttributeValues;for(let nt in W){let q=W[nt];if(q.location>=0){let j=B[nt];if(j===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let tt=j.normalized,Mt=j.itemSize,Et=t.get(j);if(Et===void 0)continue;let ne=Et.buffer,Xt=Et.type,Zt=Et.bytesPerElement,Z=Xt===i.INT||Xt===i.UNSIGNED_INT||j.gpuType===vo;if(j.isInterleavedBufferAttribute){let Q=j.data,_t=Q.stride,Nt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)d(q.location+mt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let mt=0;mt<q.locationSize;mt++)I(q.location+mt,Mt/q.locationSize,Xt,tt,_t*Zt,(Nt+Mt/q.locationSize*mt)*Zt,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)d(q.location+Q,j.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<q.locationSize;Q++)p(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Q=0;Q<q.locationSize;Q++)I(q.location+Q,Mt/q.locationSize,Xt,tt,Mt*Zt,Mt/q.locationSize*Q*Zt,Z)}}else if(X!==void 0){let tt=X[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(q.location,tt);break;case 3:i.vertexAttrib3fv(q.location,tt);break;case 4:i.vertexAttrib4fv(q.location,tt);break;default:i.vertexAttrib1fv(q.location,tt)}}}}E()}function S(){w();for(let N in n){let O=n[N];for(let R in O){let C=O[R];for(let B in C){let W=C[B];for(let X in W)h(W[X].object),delete W[X];delete C[B]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let R in O){let C=O[R];for(let B in C){let W=C[B];for(let X in W)h(W[X].object),delete W[X];delete C[B]}}delete n[N.id]}function A(N){for(let O in n){let R=n[O];for(let C in R){let B=R[C];if(B[N.id]===void 0)continue;let W=B[N.id];for(let X in W)h(W[X].object),delete W[X];delete B[N.id]}}}function x(N){for(let O in n){let R=n[O],C=N.isInstancedMesh===!0?N.id:0,B=R[C];if(B!==void 0){for(let W in B){let X=B[W];for(let nt in X)h(X[nt].object),delete X[nt];delete B[W]}delete R[C],Object.keys(R).length===0&&delete n[O]}}}function w(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Xe&&A!==_n&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:I,maxFragmentUniforms:M,maxSamples:S,samples:b}}function Ag(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $e,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let _=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,I=E*4,M=d.clippingState||null;l.value=M,M=h(_,u,I,m);for(let S=0;S!==I;++S)M[S]=e[S];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,_){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=l.value,_!==!0||p===null){let d=m+v*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let I=0,M=m;I!==v;++I,M+=4)o.copy(f[I]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var us=4,Cg=6,Rg=20,Ig=256,rr=new ns,ou=new Lt,Yl=null,Zl=0,$l=0,Kl=!1,Pg=new L,wi=new L,aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Pg}=r;Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,Zl,$l),this._renderer.xr.enabled=Kl,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:xn,format:an,colorSpace:Rs,depthBuffer:!1},s=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lg(r)),this._blurMaterial=Ng(r,t,e),this._ggxMaterial=Dg(r,t,e)}return s}_compileMaterial(t){let e=new Ee(new Fe,t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(ou),f.toneMapping=mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new ts,new Tn({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,d=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,d=!0):(p.color.copy(ou),d=!0);for(let I=0;I<6;I++){let M=I%3;M===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[I],r.y,r.z)):M===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[I]));let S=this._cubeSize;hs(s,M*S,I>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(v,l),f.render(t,l)}f.toneMapping=m,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ri||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,m=f*u,{_lodMax:_}=this,v=this._sizeLods[n],p=3*v*(n>_-us?n-_+us:0),d=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,hs(r,p,d,3*v,2*v),s.setRenderTarget(r),s.render(a,rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,hs(t,p,d,3*v,2*v),s.setRenderTarget(t),s.render(a,rr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-us?s-this._lodMax+us:0),u=4*(this._cubeSize-h);hs(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,rr)}};function Lg(i){let t=[],e=[],n=i,s=i-us+1+Cg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,m=3,_=new Float32Array(m*u*f),v=new Float32Array(m*u*f);for(let d=0;d<f;d++){let E=d%3*2/3-1,I=d>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];_.set(M,m*u*d);for(let S=0;S<u;S++){let b=h[S*2]*2-1,A=h[S*2+1]*2-1;d===0?wi.set(1,A,b):d===1?wi.set(-b,1,-A):d===2?wi.set(-b,A,1):d===3?wi.set(-1,A,-b):d===4?wi.set(-b,-1,A):wi.set(b,A,-1),wi.toArray(v,(d*u+S)*m)}}let p=new Fe;p.setAttribute("position",new rn(_,m)),p.setAttribute("outputDirection",new rn(v,m)),e.push(new Ee(p,null)),n>us&&n--}return{lodMeshes:e,sizeLods:t}}function au(i,t,e){let n=new We(i,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ng(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function lu(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function cu(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var la=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ts(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Cn});r.uniforms.tEquirect.value=e;let o=new Ee(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Ae),new po(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Ug(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===_o||m===xo)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new la(_.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let m=u.mapping,_=m===_o||m===xo,v=m===ri||m===Si;if(_||v){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new aa(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let E=u.image;return _&&E&&E.height>0||v&&E&&l(E)?(n===null&&(n=new aa(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,m){return m===_o?u.mapping=ri:m===xo&&(u.mapping=Si),u}function l(u){let m=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Fg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_i("WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(f){let u=[],m=f.index,_=f.attributes.position,v=0;if(_===void 0)return;if(m!==null){let E=m.array;v=m.version;for(let I=0,M=E.length;I<M;I+=3){let S=E[I+0],b=E[I+1],A=E[I+2];u.push(S,b,b,A,A,S)}}else{let E=_.array;v=_.version;for(let I=0,M=E.length/3-1;I<M;I+=3){let S=I+0,b=I+1,A=I+2;u.push(S,b,b,A,A,S)}}let p=new(_.count>=65535?Us:Ns)(u,1);p.version=v;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Bg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*o,m),e.update(u,n,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let v=0;for(let p=0;p<m;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,t,e){let n=new WeakMap,s=new ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],I=0;m===!0&&(I=1),_===!0&&(I=2),v===!0&&(I=3);let M=a.attributes.position.count*I,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*S*4*f),A=new Ls(b,M,S,f);A.type=_n,A.needsUpdate=!0;let x=I*4;for(let P=0;P<f;P++){let N=p[P],O=d[P],R=E[P],C=M*S*4*P;for(let B=0;B<N.count;B++){let W=B*x;m===!0&&(s.fromBufferAttribute(N,B),b[C+W+0]=s.x,b[C+W+1]=s.y,b[C+W+2]=s.z,b[C+W+3]=0),_===!0&&(s.fromBufferAttribute(O,B),b[C+W+4]=s.x,b[C+W+5]=s.y,b[C+W+6]=s.z,b[C+W+7]=0),v===!0&&(s.fromBufferAttribute(R,B),b[C+W+8]=s.x,b[C+W+9]=s.y,b[C+W+10]=s.z,b[C+W+11]=R.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new It(M,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Gg={[vl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[Tl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function Hg(i,t,e,n,s,r){let o=new We(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Fe;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));let h=new Qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ee(c,h),u=new ns(-1,1,1,-1,0,1),m=null,_=null,v=!1,p,d=null,E=[],I=!1;this.setSize=function(M,S){o.setSize(M,S),a!==null&&a.setSize(M,S),l!==null&&l.setSize(M,S);for(let b=0;b<E.length;b++){let A=E[b];A.setSize&&A.setSize(M,S)}},this.setEffects=function(M){E=M,I=E.length>0&&E[0].isRenderPass===!0;let S=o.width,b=o.height;E.length>0&&a===null&&(a=new We(S,b,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new We(S,b,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<E.length;A++){let x=E[A];x.setSize&&x.setSize(S,b)}},this.begin=function(M,S){if(v||M.toneMapping===mn&&E.length===0)return!1;if(d=S,S!==null){let b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return I===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=mn,!0},this.hasRenderPass=function(){return I},this.end=function(M,S){M.toneMapping=p,v=!0;let b=o,A=a;for(let x=0;x<E.length;x++){let w=E[x];w.enabled!==!1&&(w.render(M,A,b,S),w.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(m!==M.outputColorSpace||_!==M.toneMapping){m=M.outputColorSpace,_=M.toneMapping,h.defines={},Ht.getTransfer(m)===Jt&&(h.defines.SRGB_TRANSFER="");let x=Gg[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(d),M.render(f,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ru=new Ve,Ql=new Qn(1,1),Iu=new Ls,Pu=new Yr,Lu=new Bs,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),ye(e,n)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),ye(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),ye(e,n)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=e.isReversedDepthBuffer()?sa:ia,r=Ql):r=Ru,e.setTexture2D(t||r,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pu,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lu,s)}function l0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Iu,s)}function c0(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(i,t){i.uniform1fv(this.addr,t)}function u0(i,t){let e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function d0(i,t){let e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function f0(i,t){let e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function p0(i,t){let e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){let e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g0(i,t){let e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function S0(i,t){i.uniform2uiv(this.addr,t)}function b0(i,t){i.uniform3uiv(this.addr,t)}function w0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ql:o=Ru;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function T0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pu,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lu,r[o])}function C0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Iu,r[o])}function R0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return S0;case 36295:return b0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}}var tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}},ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function mu(i,t){i.seq.push(t),i.map[t.id]=t}function I0(i,t,e){let n=i.name,s=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),o=Jl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mu(e,c===void 0?new tc(a,i,t):new ec(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new nc(a),mu(e,f)),e=f}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);I0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function gu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var P0=37297,L0=0;function D0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _u=new Dt;function N0(i){Ht._getMatrix(_u,Ht.workingColorSpace,i);let t=`mat3( ${_u.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Is:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+D0(i.getShaderSource(t),a)}else return r}function U0(i,t){let e=N0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var F0={[vl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[bl]:"ACESFilmic",[El]:"AgX",[Tl]:"Neutral",[wl]:"Custom"};function O0(i,t){let e=F0[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oa=new L;function B0(){Ht.getLuminanceCoefficients(oa);let i=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function k0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ar(i){return i!==""}function yu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(G0,W0)}var H0=new Map;function W0(i,t){let e=Ot[t];if(e===void 0){let n=H0.get(t);if(n!==void 0)e=Ot[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ic(e)}var X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(X0,q0)}function q0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Su(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Y0={[$s]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function Z0(i){return Y0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $0={[ri]:"ENVMAP_TYPE_CUBE",[Si]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function K0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var J0={[Si]:"ENVMAP_MODE_REFRACTION"};function j0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":J0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q0={[yl]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[kh]:"ENVMAP_BLENDING_ADD"};function t_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Q0[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Z0(e),c=K0(e),h=j0(e),f=t_(e),u=e_(e),m=z0(e),_=k0(r),v=s.createProgram(),p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ar).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ar).join(`
`),d.length>0&&(d+=`
`)):(p=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),d=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==mn?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=ic(o),o=yu(o,e),o=vu(o,e),a=ic(a),a=yu(a,e),a=vu(a,e),o=Mu(o),a=Mu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=E+p+o,M=E+d+a,S=gu(s,s.VERTEX_SHADER,I),b=gu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,S),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",R=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(b)||"",B=O.trim(),W=R.trim(),X=C.trim(),nt=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,b);else{let j=xu(s,S,"vertex"),tt=xu(s,b,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+j+`
`+tt)}else B!==""?Ct("WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(q=!1);q&&(N.diagnostics={runnable:nt,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(S),s.deleteShader(b),x=new ds(s,v),w=V0(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,P0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var i_=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rc(t),e.set(t,n)),n}},rc=class{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}};function s_(i){return i===li||i===nr||i===ir}function r_(i,t,e,n,s,r){let o=new Ji,a=new sc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,P,N,O,R){let C=N.fog,B=O.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||W,X),q=nt&&nt.mapping===Ks?nt.image.height:null,j=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=tt!==void 0?tt.length:0,Et=0;B.morphAttributes.position!==void 0&&(Et=1),B.morphAttributes.normal!==void 0&&(Et=2),B.morphAttributes.color!==void 0&&(Et=3);let ne,Xt,Zt,Z;if(j){let se=In[j];ne=se.vertexShader,Xt=se.fragmentShader}else{ne=x.vertexShader,Xt=x.fragmentShader;let se=a.getVertexShaderStage(x),$t=a.getFragmentShaderStage(x);a.update(x,se,$t),Zt=se.id,Z=$t.id}let Q=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,Bt=!!x.map,_e=!!x.matcap,kt=!!nt,Yt=!!x.aoMap,ie=!!x.lightMap,Gt=!!x.bumpMap&&x.wireframe===!1,le=!!x.normalMap,Se=!!x.displacementMap,He=!!x.emissiveMap,he=!!x.metalnessMap,pe=!!x.roughnessMap,F=x.anisotropy>0,Pe=x.clearcoat>0,jt=x.dispersion>0,T=x.retroreflectivity>0,g=x.iridescence>0,z=x.sheen>0,G=x.transmission>0,Y=F&&!!x.anisotropyMap,it=Pe&&!!x.clearcoatMap,st=Pe&&!!x.clearcoatNormalMap,$=Pe&&!!x.clearcoatRoughnessMap,J=g&&!!x.iridescenceMap,rt=g&&!!x.iridescenceThicknessMap,bt=z&&!!x.sheenColorMap,ct=z&&!!x.sheenRoughnessMap,ot=!!x.specularMap,wt=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Ut=G&&!!x.transmissionMap,U=G&&!!x.thicknessMap,at=!!x.gradientMap,K=!!x.alphaMap,lt=x.alphaTest>0,ft=!!x.alphaHash,et=!!x.extensions,Tt=mn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let vt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:Xt,defines:x.defines,customVertexShaderID:Zt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:_e,envMap:kt,envMapMode:kt&&nt.mapping,envMapCubeUVHeight:q,aoMap:Yt,lightMap:ie,bumpMap:Gt,normalMap:le,displacementMap:Se,emissiveMap:He,normalMapObjectSpace:le&&x.normalMapType===Hh,normalMapTangentSpace:le&&x.normalMapType===na,packedNormalMap:le&&x.normalMapType===na&&s_(x.normalMap.format),metalnessMap:he,roughnessMap:pe,anisotropy:F,anisotropyMap:Y,clearcoat:Pe,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:$,dispersion:jt,retroreflection:T,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:z,sheenColorMap:bt,sheenRoughnessMap:ct,specularMap:ot,specularColorMap:wt,specularIntensityMap:Rt,transmission:G,transmissionMap:Ut,thicknessMap:U,gradientMap:at,opaque:x.transparent===!1&&x.blending===os&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ft,combine:x.combine,mapUv:Bt&&_(x.map.channel),aoMapUv:Yt&&_(x.aoMap.channel),lightMapUv:ie&&_(x.lightMap.channel),bumpMapUv:Gt&&_(x.bumpMap.channel),normalMapUv:le&&_(x.normalMap.channel),displacementMapUv:Se&&_(x.displacementMap.channel),emissiveMapUv:He&&_(x.emissiveMap.channel),metalnessMapUv:he&&_(x.metalnessMap.channel),roughnessMapUv:pe&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:it&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(x.sheenRoughnessMap.channel),specularMapUv:ot&&_(x.specularMap.channel),specularColorMapUv:wt&&_(x.specularColorMap.channel),specularIntensityMapUv:Rt&&_(x.specularIntensityMap.channel),transmissionMapUv:Ut&&_(x.transmissionMap.channel),thicknessMapUv:U&&_(x.thicknessMap.channel),alphaMapUv:K&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(le||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Bt||K),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&Ht.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===Re,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(d(w,x),E(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function I(x){let w=m[x.type],P;if(w){let N=In[w];P=iu.clone(N.uniforms)}else P=x.uniforms;return P}function M(x,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new n_(i,w,x,s),c.push(P),h.set(w,P)),P}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:I,acquireProgram:M,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function o_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,_,v,p,d){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:m,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:d},i[t]=E):(E.id=u.id,E.object=u,E.geometry=m,E.material=_,E.materialVariant=o(u),E.groupOrder=v,E.renderOrder=u.renderOrder,E.z=p,E.group=d),t++,E}function l(u,m,_,v,p,d,E){E.reversedDepth===!0&&(p=-p);let I=a(u,m,_,v,p,d);_.transmission>0?n.push(I):_.transparent===!0?s.push(I):e.push(I)}function c(u,m,_,v,p,d){let E=a(u,m,_,v,p,d);_.transmission>0?n.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,m){e.length>1&&e.sort(u||a_),n.length>1&&n.sort(m||bu),s.length>1&&s.sort(m||bu)}function f(){for(let u=t,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function l_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new wu,i.set(n,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Lt};break;case"SpotLight":e={position:new L,direction:new L,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function h_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var u_=0;function d_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f_(i){let t=new c_,e=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new At,o=new At;function a(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,E=0,I=0,M=0,S=0,b=0,A=0,x=0,w=0,P=0;c.sort(d_);for(let O=0,R=c.length;O<R;O++){let C=c[O],B=C.color,W=C.intensity,X=C.distance,nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===li?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*W,f+=B.g*W,u+=B.b*W;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],W);P++}else if(C.isSunLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=tt,n.sunShadowMap[_]=nt;let Mt=j.getViewportCount();for(let Et=0;Et<Mt;Et++)n.sunShadowMatrix[v+Et]=j.getMatrix(Et),n.sunShadowCascade[v+Et]=j._cascadeData[Et];v+=Mt,_++}n.sun[m]=q,m++}else if(C.isDirectionalLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=q,p++}else if(C.isSpotLight){let q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(B).multiplyScalar(W),q.distance=X,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[E]=q;let j=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,j.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[E]=j.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[E]=tt,n.spotShadowMap[E]=nt,A++}E++}else if(C.isRectAreaLight){let q=t.get(C);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[I]=q,I++}else if(C.isPointLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[d]=tt,n.pointShadowMap[d]=nt,n.pointShadowMatrix[d]=C.shadow.matrix,b++}n.point[d]=q,d++}else if(C.isHemisphereLight){let q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(W),q.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[M]=q,M++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==E||N.rectAreaLength!==I||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==S||N.numPointShadows!==b||N.numSpotShadows!==A||N.numSpotMaps!==x||N.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=p,n.spot.length=E,n.rectArea.length=I,n.point.length=d,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=E,N.rectAreaLength=I,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=S,N.numPointShadows=b,N.numSpotShadows=A,N.numSpotMaps=x,N.numLightProbes=P,n.version=u_++)}function l(c,h){let f=0,u=0,m=0,_=0,v=0,p=0,d=h.matrixWorldInverse;for(let E=0,I=c.length;E<I;E++){let M=c[E];if(M.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),f++}else if(M.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(M.isSpotLight){let S=n.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),_++}else if(M.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let S=n.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:n}}function Eu(i){let t=new f_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function p_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Eu(i),t.set(s,[a])):r>=o.length?(a=new Eu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,__=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],x_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Tu=new At,or=new L,jl=new L;function y_(i,t,e){let n=new Qi,s=new It,r=new It,o=new ce,a=new to,l=new eo,c={},h=e.maxTextureSize,f={[An]:Re,[Re]:An,[on]:on},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new Fe;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ee(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let d=this.type;this.render=function(b,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===vh&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);let w=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Cn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let R=d!==this.type;R&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=b.length;C<B;C++){let W=b[C],X=W.shadow;if(X===void 0){Ct("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||R===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===rs){if(W.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new We(s.x,s.y,{format:li,type:xn,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new Qn(s.x,s.y,_n),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=wn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=we,X.map.depthTexture.magFilter=we}else W.isPointLight?(X.map=new la(s.x),X.map.depthTexture=new jr(s.x,gn)):(X.map=new We(s.x,s.y),X.map.depthTexture=new Qn(s.x,s.y,gn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=wn,this.type===$s?(X.map.depthTexture.compareFunction=q?sa:ia,X.map.depthTexture.minFilter=Ae,X.map.depthTexture.magFilter=Ae):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=we,X.map.depthTexture.magFilter=we);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,x);for(let tt=0;tt<j;tt++){let Mt=X.getCamera(tt);if(W.isPointLight){let Et=X.camera,ne=X.matrix,Xt=W.distance||Et.far;Xt!==Et.far&&(Et.far=Xt,Et.updateProjectionMatrix()),or.setFromMatrixPosition(W.matrixWorld),Et.position.copy(or),jl.copy(Et.position),jl.add(__[tt]),Et.up.copy(x_[tt]),Et.lookAt(jl),Et.updateMatrixWorld(),ne.makeTranslation(-or.x,-or.y,-or.z),Tu.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Tu,Et.coordinateSystem,Et.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(X.map),i.clear());let Et=X.getViewport(tt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),O.viewport(o)}n=X.getFrustum(tt),M(A,x,Mt,W,this.type)}X.isPointLightShadow!==!0&&this.type===rs&&E(X,x),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(w,P,N)};function E(b,A){let x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new We(s.x,s.y,{format:li,type:xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,x,m,v,null)}function I(b,A,x,w){let P=null,N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=P.uuid,R=A.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let B=C[R];B===void 0&&(B=P.clone(),C[R]=B,A.addEventListener("dispose",S)),P=B}if(P.visible=A.visible,P.wireframe=A.wireframe,w===rs?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=x}return P}function M(b,A,x,w,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===rs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let R=t.update(b),C=b.material;if(Array.isArray(C)){let B=R.groups;for(let W=0,X=B.length;W<X;W++){let nt=B[W],q=C[nt.materialIndex];if(q&&q.visible){let j=I(b,q,w,P);b.onBeforeShadow(i,b,A,x,R,j,nt),i.renderBufferDirect(x,null,R,j,b,nt),b.onAfterShadow(i,b,A,x,R,j,nt)}}}else if(C.visible){let B=I(b,C,w,P);b.onBeforeShadow(i,b,A,x,R,B,null),i.renderBufferDirect(x,null,R,B,b,null),b.onAfterShadow(i,b,A,x,R,B,null)}}let O=b.children;for(let R=0,C=O.length;R<C;R++)M(O[R],A,x,w,P)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],P=b.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function v_(i,t){function e(){let U=!1,at=new ce,K=null,lt=new ce(0,0,0,0);return{setMask:function(ft){K!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){U=ft},setClear:function(ft,et,Tt,vt,se){se===!0&&(ft*=vt,et*=vt,Tt*=vt),at.set(ft,et,Tt,vt),lt.equals(at)===!1&&(i.clearColor(ft,et,Tt,vt),lt.copy(at))},reset:function(){U=!1,K=null,lt.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,K=null,lt=null,ft=null;return{setReversed:function(et){if(at!==et){let Tt=t.get("EXT_clip_control");et?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),at=et;let vt=ft;ft=null,this.setClear(vt)}},getReversed:function(){return at},setTest:function(et){et?Q(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(et){K!==et&&!U&&(i.depthMask(et),K=et)},setFunc:function(et){if(at&&(et=eu[et]),lt!==et){switch(et){case Ur:i.depthFunc(i.NEVER);break;case Fr:i.depthFunc(i.ALWAYS);break;case Or:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Br:i.depthFunc(i.EQUAL);break;case zr:i.depthFunc(i.GEQUAL);break;case kr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=et}},setLocked:function(et){U=et},setClear:function(et){ft!==et&&(ft=et,at&&(et=1-et),i.clearDepth(et))},reset:function(){U=!1,K=null,lt=null,ft=null,at=!1}}}function s(){let U=!1,at=null,K=null,lt=null,ft=null,et=null,Tt=null,vt=null,se=null;return{setTest:function($t){U||($t?Q(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function($t){at!==$t&&!U&&(i.stencilMask($t),at=$t)},setFunc:function($t,cn,vn){(K!==$t||lt!==cn||ft!==vn)&&(i.stencilFunc($t,cn,vn),K=$t,lt=cn,ft=vn)},setOp:function($t,cn,vn){(et!==$t||Tt!==cn||vt!==vn)&&(i.stencilOp($t,cn,vn),et=$t,Tt=cn,vt=vn)},setLocked:function($t){U=$t},setClear:function($t){se!==$t&&(i.clearStencil($t),se=$t)},reset:function(){U=!1,at=null,K=null,lt=null,ft=null,et=null,Tt=null,vt=null,se=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},m=new WeakMap,_=[],v=null,p=!1,d=null,E=null,I=null,M=null,S=null,b=null,A=null,x=new Lt(0,0,0),w=0,P=!1,N=null,O=null,R=null,C=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=nt>=2);let j=null,tt={},Mt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),ne=new ce().fromArray(Mt),Xt=new ce().fromArray(Et);function Zt(U,at,K,lt){let ft=new Uint8Array(4),et=i.createTexture();i.bindTexture(U,et),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<K;Tt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(at+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return et}let Z={};Z[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(qi),Gt(!1),le(fl),Q(i.CULL_FACE),Yt(Cn);function Q(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function _t(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Nt(U,at){return u[U]!==at?(i.bindFramebuffer(U,at),u[U]=at,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function mt(U,at){let K=_,lt=!1;if(U){K=m.get(at),K===void 0&&(K=[],m.set(at,K));let ft=U.textures;if(K.length!==ft.length||K[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Tt=ft.length;et<Tt;et++)K[et]=i.COLOR_ATTACHMENT0+et;K.length=ft.length,lt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,lt=!0);lt&&i.drawBuffers(K)}function Bt(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let _e={[Mi]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};_e[wh]=i.MIN,_e[Eh]=i.MAX;let kt={[Th]:i.ZERO,[Ah]:i.ONE,[Ch]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(U,at,K,lt,ft,et,Tt,vt,se,$t){if(U===Cn){p===!0&&(_t(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),U!==Mh){if(U!==d||$t!==P){if((E!==Mi||S!==Mi)&&(i.blendEquation(i.FUNC_ADD),E=Mi,S=Mi),$t)switch(U){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",U);break}else switch(U){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",U);break}I=null,M=null,b=null,A=null,x.set(0,0,0),w=0,d=U,P=$t}return}ft=ft||at,et=et||K,Tt=Tt||lt,(at!==E||ft!==S)&&(i.blendEquationSeparate(_e[at],_e[ft]),E=at,S=ft),(K!==I||lt!==M||et!==b||Tt!==A)&&(i.blendFuncSeparate(kt[K],kt[lt],kt[et],kt[Tt]),I=K,M=lt,b=et,A=Tt),(vt.equals(x)===!1||se!==w)&&(i.blendColor(vt.r,vt.g,vt.b,se),x.copy(vt),w=se),d=U,P=!1}function ie(U,at){U.side===on?_t(i.CULL_FACE):Q(i.CULL_FACE);let K=U.side===Re;at&&(K=!K),Gt(K),U.blending===os&&U.transparent===!1?Yt(Cn):Yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let lt=U.stencilWrite;a.setTest(lt),lt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function le(U){U!==xh?(Q(i.CULL_FACE),U!==O&&(U===fl?i.cullFace(i.BACK):U===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),O=U}function Se(U){U!==R&&(X&&i.lineWidth(U),R=U)}function He(U,at,K){U?(Q(i.POLYGON_OFFSET_FILL),(C!==at||B!==K)&&(C=at,B=K,o.getReversed()&&(at=-at),i.polygonOffset(at,K))):_t(i.POLYGON_OFFSET_FILL)}function he(U){U?Q(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function pe(U){U===void 0&&(U=i.TEXTURE0+W-1),j!==U&&(i.activeTexture(U),j=U)}function F(U,at,K){K===void 0&&(j===null?K=i.TEXTURE0+W-1:K=j);let lt=tt[K];lt===void 0&&(lt={type:void 0,texture:void 0},tt[K]=lt),(lt.type!==U||lt.texture!==at)&&(j!==K&&(i.activeTexture(K),j=K),i.bindTexture(U,at||Z[U]),lt.type=U,lt.texture=at)}function Pe(){let U=tt[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function g(){try{i.texSubImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function it(){try{i.texStorage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function st(){try{i.texStorage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function $(){try{i.texImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function rt(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function bt(U,at){f[U]!==at&&(i.pixelStorei(U,at),f[U]=at)}function ct(U){ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function ot(U){Xt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Xt.copy(U))}function wt(U,at){let K=c.get(at);K===void 0&&(K=new WeakMap,c.set(at,K));let lt=K.get(U);lt===void 0&&(lt=i.getUniformBlockIndex(at,U.name),K.set(U,lt))}function Rt(U,at){let lt=c.get(at).get(U);l.get(at)!==lt&&(i.uniformBlockBinding(at,lt,U.__bindingPointIndex),l.set(at,lt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,tt={},u={},m=new WeakMap,_=[],v=null,p=!1,d=null,E=null,I=null,M=null,S=null,b=null,A=null,x=new Lt(0,0,0),w=0,P=!1,N=null,O=null,R=null,C=null,B=null,ne.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:_t,bindFramebuffer:Nt,drawBuffers:mt,useProgram:Bt,setBlending:Yt,setMaterial:ie,setFlipSided:Gt,setCullFace:le,setLineWidth:Se,setPolygonOffset:He,setScissorTest:he,activeTexture:pe,bindTexture:F,unbindTexture:Pe,compressedTexImage2D:jt,compressedTexImage3D:T,texImage2D:$,texImage3D:J,pixelStorei:bt,getParameter:rt,updateUBOMapping:wt,uniformBlockBinding:Rt,texStorage2D:it,texStorage3D:st,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:ct,viewport:ot,reset:Ut}}function M_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,f=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,g){return _?new OffscreenCanvas(T,g):Ps("canvas")}function p(T,g,z){let G=1,Y=jt(T);if((Y.width>z||Y.height>z)&&(G=z/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let it=Math.floor(G*Y.width),st=Math.floor(G*Y.height);u===void 0&&(u=v(it,st));let $=g?v(it,st):u;return $.width=it,$.height=st,$.getContext("2d").drawImage(T,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+it+"x"+st+")."),$}else return"data"in T&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function d(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,g,z,G,Y,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let st;G&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&st&&($=st.R16_EXT),z===i.SHORT&&st&&($=st.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),g===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&st&&($=st.RG16_EXT),z===i.SHORT&&st&&($=st.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&st&&($=st.RGB16_EXT),z===i.SHORT&&st&&($=st.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let J=it?Is:Ht.getTransfer(Y);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=J===Jt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&st&&($=st.RGBA16_EXT),z===i.SHORT&&st&&($=st.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(T,g){let z;return T?g===null||g===gn||g===ls?z=i.DEPTH24_STENCIL8:g===_n?z=i.DEPTH32F_STENCIL8:g===as&&(z=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gn||g===ls?z=i.DEPTH_COMPONENT24:g===_n?z=i.DEPTH_COMPONENT32F:g===as&&(z=i.DEPTH_COMPONENT16),z}function b(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==we&&T.minFilter!==Ae?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){let g=T.target;g.removeEventListener("dispose",A),w(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),N(g)}function w(T){let g=n.get(T);if(g.__webglInit===void 0)return;let z=T.source,G=m.get(z);if(G){let Y=G[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(T),Object.keys(G).length===0&&m.delete(z)}n.remove(T)}function P(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let z=T.source,G=m.get(z);delete G[g.__cacheKey],o.memory.textures--}function N(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let Y=0;Y<g.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=T.textures;for(let G=0,Y=z.length;G<Y;G++){let it=n.get(z[G]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(z[G])}n.remove(T)}let O=0;function R(){O=0}function C(){return O}function B(T){O=T}function W(){let T=O;return T>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function X(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function nt(T,g){let z=n.get(T);if(T.isVideoTexture&&F(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let G=T.image;if(G===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,T,g);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function q(T,g){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){_t(z,T,g);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function j(T,g){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){_t(z,T,g);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function tt(T,g){let z=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){Nt(z,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}let Mt={[Gr]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Hr]:i.MIRRORED_REPEAT},Et={[we]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ne={[Xh]:i.NEVER,[Kh]:i.ALWAYS,[qh]:i.LESS,[ia]:i.LEQUAL,[Yh]:i.EQUAL,[sa]:i.GEQUAL,[Zh]:i.GREATER,[$h]:i.NOTEQUAL};function Xt(T,g){if(g.type===_n&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ae||g.magFilter===yo||g.magFilter===Js||g.magFilter===oi||g.minFilter===Ae||g.minFilter===yo||g.minFilter===Js||g.minFilter===oi)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Mt[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Mt[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Mt[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Et[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Et[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ne[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===we||g.minFilter!==Js&&g.minFilter!==oi||g.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Zt(T,g){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));let G=g.source,Y=m.get(G);Y===void 0&&(Y={},m.set(G,Y));let it=X(g);if(it!==T.__cacheKey){Y[it]===void 0&&(Y[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Y[it].usedTimes++;let st=Y[T.__cacheKey];st!==void 0&&(Y[T.__cacheKey].usedTimes--,st.usedTimes===0&&P(g)),T.__cacheKey=it,T.__webglTexture=Y[it].texture}return z}function Z(T,g,z){return Math.floor(Math.floor(T/z)/g)}function Q(T,g,z,G){let it=T.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,G,g.data);else{it.sort((bt,ct)=>bt.start-ct.start);let st=0;for(let bt=1;bt<it.length;bt++){let ct=it[st],ot=it[bt],wt=ct.start+ct.count,Rt=Z(ot.start,g.width,4),Ut=Z(ct.start,g.width,4);ot.start<=wt+1&&Rt===Ut&&Z(ot.start+ot.count-1,g.width,4)===Rt?ct.count=Math.max(ct.count,ot.start+ot.count-ct.start):(++st,it[st]=ot)}it.length=st+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let bt=0,ct=it.length;bt<ct;bt++){let ot=it[bt],wt=Math.floor(ot.start/4),Rt=Math.ceil(ot.count/4),Ut=wt%g.width,U=Math.floor(wt/g.width),at=Rt,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ut,U,at,K,z,G,g.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function _t(T,g,z){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let Y=Zt(T,g),it=g.source;e.bindTexture(G,T.__webglTexture,i.TEXTURE0+z);let st=n.get(it);if(it.version!==st.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let K=Ht.getPrimaries(Ht.workingColorSpace),lt=g.colorSpace===zn?null:Ht.getPrimaries(g.colorSpace),ft=g.colorSpace===zn||K===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let J=p(g.image,!1,s.maxTextureSize);J=Pe(g,J);let rt=r.convert(g.format,g.colorSpace),bt=r.convert(g.type),ct=M(g.internalFormat,rt,bt,g.normalized,g.colorSpace,g.isVideoTexture);Xt(G,g);let ot,wt=g.mipmaps,Rt=g.isVideoTexture!==!0,Ut=st.__version===void 0||Y===!0,U=it.dataReady,at=b(g,J);if(g.isDepthTexture)ct=S(g.format===ai,g.type),Ut&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,ct,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,ct,J.width,J.height,0,rt,bt,null));else if(g.isDataTexture)if(wt.length>0){Rt&&Ut&&e.texStorage2D(i.TEXTURE_2D,at,ct,wt[0].width,wt[0].height);for(let K=0,lt=wt.length;K<lt;K++)ot=wt[K],Rt?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,rt,bt,ot.data):e.texImage2D(i.TEXTURE_2D,K,ct,ot.width,ot.height,0,rt,bt,ot.data);g.generateMipmaps=!1}else Rt?(Ut&&e.texStorage2D(i.TEXTURE_2D,at,ct,J.width,J.height),U&&Q(g,J,rt,bt)):e.texImage2D(i.TEXTURE_2D,0,ct,J.width,J.height,0,rt,bt,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Rt&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,ct,wt[0].width,wt[0].height,J.depth);for(let K=0,lt=wt.length;K<lt;K++)if(ot=wt[K],g.format!==an)if(rt!==null)if(Rt){if(U)if(g.layerUpdates.size>0){let ft=Vl(ot.width,ot.height,g.format,g.type);for(let et of g.layerUpdates){let Tt=ot.data.subarray(et*ft/ot.data.BYTES_PER_ELEMENT,(et+1)*ft/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,et,ot.width,ot.height,1,rt,Tt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,J.depth,rt,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ct,ot.width,ot.height,J.depth,0,ot.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,J.depth,rt,bt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,ct,ot.width,ot.height,J.depth,0,rt,bt,ot.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Rt&&Ut&&e.texStorage2D(i.TEXTURE_2D,at,ct,wt[0].width,wt[0].height);for(let K=0,lt=wt.length;K<lt;K++)ot=wt[K],g.format!==an?rt!==null?Rt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,rt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,K,ct,ot.width,ot.height,0,ot.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,rt,bt,ot.data):e.texImage2D(i.TEXTURE_2D,K,ct,ot.width,ot.height,0,rt,bt,ot.data)}else if(g.isDataArrayTexture)if(Rt){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,ct,J.width,J.height,J.depth),U)if(g.layerUpdates.size>0){let K=Vl(J.width,J.height,g.format,g.type);for(let lt of g.layerUpdates){let ft=J.data.subarray(lt*K/J.data.BYTES_PER_ELEMENT,(lt+1)*K/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,J.width,J.height,1,rt,bt,ft)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,rt,bt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,J.width,J.height,J.depth,0,rt,bt,J.data);else if(g.isData3DTexture)Rt?(Ut&&e.texStorage3D(i.TEXTURE_3D,at,ct,J.width,J.height,J.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,rt,bt,J.data)):e.texImage3D(i.TEXTURE_3D,0,ct,J.width,J.height,J.depth,0,rt,bt,J.data);else if(g.isFramebufferTexture){if(Ut)if(Rt)e.texStorage2D(i.TEXTURE_2D,at,ct,J.width,J.height);else{let K=J.width,lt=J.height;for(let ft=0;ft<at;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,K,lt,0,rt,bt,null),K>>=1,lt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),f.add(g),K.onpaint=lt=>{let ft=lt.changedElements;for(let et of f)ft.includes(et.image)&&(et.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let ft=i.RGBA,et=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,et,Tt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Rt&&Ut){let K=jt(wt[0]);e.texStorage2D(i.TEXTURE_2D,at,ct,K.width,K.height)}for(let K=0,lt=wt.length;K<lt;K++)ot=wt[K],Rt?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,rt,bt,ot):e.texImage2D(i.TEXTURE_2D,K,ct,rt,bt,ot);g.generateMipmaps=!1}else if(Rt){if(Ut){let K=jt(J);e.texStorage2D(i.TEXTURE_2D,at,ct,K.width,K.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,bt,J)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,bt,J);d(g)&&E(G),st.__version=it.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Nt(T,g,z){if(g.image.length!==6)return;let G=Zt(T,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let it=n.get(Y);if(Y.version!==it.__version||G===!0){e.activeTexture(i.TEXTURE0+z);let st=Ht.getPrimaries(Ht.workingColorSpace),$=g.colorSpace===zn?null:Ht.getPrimaries(g.colorSpace),J=g.colorSpace===zn||st===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let rt=g.isCompressedTexture||g.image[0].isCompressedTexture,bt=g.image[0]&&g.image[0].isDataTexture,ct=[];for(let et=0;et<6;et++)!rt&&!bt?ct[et]=p(g.image[et],!0,s.maxCubemapSize):ct[et]=bt?g.image[et].image:g.image[et],ct[et]=Pe(g,ct[et]);let ot=ct[0],wt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type),Ut=M(g.internalFormat,wt,Rt,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,at=it.__version===void 0||G===!0,K=Y.dataReady,lt=b(g,ot);Xt(i.TEXTURE_CUBE_MAP,g);let ft;if(rt){U&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ut,ot.width,ot.height);for(let et=0;et<6;et++){ft=ct[et].mipmaps;for(let Tt=0;Tt<ft.length;Tt++){let vt=ft[Tt];g.format!==an?wt!==null?U?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,vt.width,vt.height,wt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,Ut,vt.width,vt.height,0,vt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,vt.width,vt.height,wt,Rt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,Ut,vt.width,vt.height,0,wt,Rt,vt.data)}}}else{if(ft=g.mipmaps,U&&at){ft.length>0&&lt++;let et=jt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ut,et.width,et.height)}for(let et=0;et<6;et++)if(bt){U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ct[et].width,ct[et].height,wt,Rt,ct[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ut,ct[et].width,ct[et].height,0,wt,Rt,ct[et].data);for(let Tt=0;Tt<ft.length;Tt++){let se=ft[Tt].image[et].image;U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,se.width,se.height,wt,Rt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,Ut,se.width,se.height,0,wt,Rt,se.data)}}else{U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,wt,Rt,ct[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ut,wt,Rt,ct[et]);for(let Tt=0;Tt<ft.length;Tt++){let vt=ft[Tt];U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,wt,Rt,vt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,Ut,wt,Rt,vt.image[et])}}}d(g)&&E(i.TEXTURE_CUBE_MAP),it.__version=Y.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function mt(T,g,z,G,Y,it){let st=r.convert(z.format,z.colorSpace),$=r.convert(z.type),J=M(z.internalFormat,st,$,z.normalized,z.colorSpace),rt=n.get(g),bt=n.get(z);if(bt.__renderTarget=g,!rt.__hasExternalTextures){let ct=Math.max(1,g.width>>it),ot=Math.max(1,g.height>>it);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,it,J,ct,ot,g.depth,0,st,$,null):e.texImage2D(Y,it,J,ct,ot,0,st,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),pe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,bt.__webglTexture,0,he(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,bt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(T,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let G=g.depthTexture,Y=G&&G.isDepthTexture?G.type:null,it=S(g.stencilBuffer,Y),st=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(g),it,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(g),it,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,it,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,T)}else{let G=g.textures;for(let Y=0;Y<G.length;Y++){let it=G[Y],st=r.convert(it.format,it.colorSpace),$=r.convert(it.type),J=M(it.internalFormat,st,$,it.normalized,it.colorSpace);pe(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(g),J,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(T,g,z){let G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,g.depthTexture);let rt=r.convert(g.depthTexture.format),bt=r.convert(g.depthTexture.type),ct;g.depthTexture.format===wn?ct=i.DEPTH_COMPONENT24:g.depthTexture.format===ai&&(ct=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ct,g.width,g.height,0,rt,bt,null)}}else nt(g.depthTexture,0);let it=Y.__webglTexture,st=he(g),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,J=g.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===wn)pe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,it,0);else if(g.depthTexture.format===ai)pe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(T){let g=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let G=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=G}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)_e(g.__webglFramebuffer[G],T,G);else{let G=T.texture.mipmaps;G&&G.length>0?_e(g.__webglFramebuffer[0],T,0):_e(g.__webglFramebuffer,T,0)}else if(z){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),Bt(g.__webglDepthbuffer[G],T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}else{let G=T.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Bt(g.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(T,g,z){let G=n.get(T);g!==void 0&&mt(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&kt(T)}function ie(T){let g=T.texture,z=n.get(T),G=n.get(g);T.addEventListener("dispose",x);let Y=T.textures,it=T.isWebGLCubeRenderTarget===!0,st=Y.length>1;if(st||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,o.memory.textures++),it){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let J=0;J<g.mipmaps.length;J++)z.__webglFramebuffer[$][J]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(st)for(let $=0,J=Y.length;$<J;$++){let rt=n.get(Y[$]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&pe(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){let J=Y[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let rt=r.convert(J.format,J.colorSpace),bt=r.convert(J.type),ct=M(J.internalFormat,rt,bt,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),ot=he(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)mt(z.__webglFramebuffer[$][J],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else mt(z.__webglFramebuffer[$],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(g)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let $=0,J=Y.length;$<J;$++){let rt=Y[$],bt=n.get(rt),ct=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,bt.__webglTexture),Xt(ct,rt),mt(z.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+$,ct,0),d(rt)&&E(ct)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),Xt($,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)mt(z.__webglFramebuffer[J],T,g,i.COLOR_ATTACHMENT0,$,J);else mt(z.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,$,0);d(g)&&E($),e.unbindTexture()}T.depthBuffer&&kt(T)}function Gt(T){let g=T.textures;for(let z=0,G=g.length;z<G;z++){let Y=g[z];if(d(Y)){let it=I(T),st=n.get(Y).__webglTexture;e.bindTexture(it,st),E(it),e.unbindTexture()}}}let le=[],Se=[];function He(T){if(T.samples>0){if(pe(T)===!1){let g=T.textures,z=T.width,G=T.height,Y=i.COLOR_BUFFER_BIT,it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(T),$=g.length>1;if($)for(let rt=0;rt<g.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let J=T.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<g.length;rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let bt=n.get(g[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,z,G,0,0,z,G,Y,i.NEAREST),l===!0&&(le.length=0,Se.length=0,le.push(i.COLOR_ATTACHMENT0+rt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(le.push(it),Se.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let rt=0;rt<g.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let bt=n.get(g[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function he(T){return Math.min(s.maxSamples,T.samples)}function pe(T){let g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(T){let g=o.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function Pe(T,g){let z=T.colorSpace,G=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Rs&&z!==zn&&(Ht.getTransfer(z)===Jt?(G!==an||Y!==Xe)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",z)),g}function jt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=R,this.getTextureUnits=C,this.setTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=Yt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function S_(i,t){function e(n,s=zn){let r,o=Ht.getTransfer(s);if(n===Xe)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===an)return i.RGBA;if(n===wn)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===li)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===js||n===Qs||n===tr||n===er)if(o===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Po||n===Lo||n===Do||n===No||n===nr||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Po)return o===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nr)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Jo||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ta||n===ir||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:b_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends pn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,_=null,v=typeof XRWebGLBinding<"u",p=new oc,d={},E=e.getContextAttributes(),I=null,M=null,S=[],b=[],A=new It,x=null,w=null,P=new Ue;P.viewport=new ce;let N=new Ue;N.viewport=new ce;let O=[P,N],R=new mo,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=S[Z];return Q===void 0&&(Q=new ji,S[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=S[Z];return Q===void 0&&(Q=new ji,S[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=S[Z];return Q===void 0&&(Q=new ji,S[Z]=Q),Q.getHandSpace()};function W(Z){let Q=b.indexOf(Z.inputSource);if(Q===-1)return;let _t=S[Q];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||o),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<S.length;Z++){let Q=b[Z];Q!==null&&(b[Z]=null,S[Z].disconnect(Q))}C=null,B=null,p.reset();for(let Z in d)delete d[Z];if(t.setRenderTarget(I),m=null,u=null,f=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Nt=null,mt=null;E.depth&&(mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?ai:wn,Nt=E.stencil?ls:gn);let Bt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new We(u.textureWidth,u.textureHeight,{format:an,type:Xe,depthTexture:new Qn(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new We(m.framebufferWidth,m.framebufferHeight,{format:an,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Z){for(let Q=0;Q<Z.removed.length;Q++){let _t=Z.removed[Q],Nt=b.indexOf(_t);Nt>=0&&(b[Nt]=null,S[Nt].disconnect(_t))}for(let Q=0;Q<Z.added.length;Q++){let _t=Z.added[Q],Nt=b.indexOf(_t);if(Nt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=b.length){b.push(_t),Nt=Bt;break}else if(b[Bt]===null){b[Bt]=_t,Nt=Bt;break}if(Nt===-1)break}let mt=S[Nt];mt&&mt.connect(_t)}}let q=new L,j=new L;function tt(Z,Q,_t){q.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let Nt=q.distanceTo(j),mt=Q.projectionMatrix.elements,Bt=_t.projectionMatrix.elements,_e=mt[14]/(mt[10]-1),kt=mt[14]/(mt[10]+1),Yt=(mt[9]+1)/mt[5],ie=(mt[9]-1)/mt[5],Gt=(mt[8]-1)/mt[0],le=(Bt[8]+1)/Bt[0],Se=_e*Gt,He=_e*le,he=Nt/(-Gt+le),pe=he*-Gt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pe),Z.translateZ(he),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),mt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let F=_e+he,Pe=kt+he,jt=Se-pe,T=He+(Nt-pe),g=Yt*kt/Pe*F,z=ie*kt/Pe*F;Z.projectionMatrix.makePerspective(jt,T,g,z,F,Pe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,_t=Z.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),R.near=N.near=P.near=Q,R.far=N.far=P.far=_t,(C!==R.near||B!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,B=R.far),R.layers.mask=Z.layers.mask|6,P.layers.mask=R.layers.mask&-5,N.layers.mask=R.layers.mask&-3;let Nt=Z.parent,mt=R.cameras;Mt(R,Nt);for(let Bt=0;Bt<mt.length;Bt++)Mt(mt[Bt],Nt);mt.length===2?tt(R,P,N):R.projectionMatrix.copy(P.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Et(Z,R,Nt)};function Et(Z,Q,_t){_t===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$i*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(R)},this.getCameraTexture=function(Z){return d[Z]};let ne=null;function Xt(Z,Q){if(h=Q.getViewerPose(c||o),_=Q,h!==null){let _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Nt=!1;_t.length!==R.cameras.length&&(R.cameras.length=0,Nt=!0);for(let kt=0;kt<_t.length;kt++){let Yt=_t[kt],ie=null;if(m!==null)ie=m.getViewport(Yt);else{let le=f.getViewSubImage(u,Yt);ie=le.viewport,kt===0&&(t.setRenderTargetTextures(M,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(M))}let Gt=O[kt];Gt===void 0&&(Gt=new Ue,Gt.layers.enable(kt),Gt.viewport=new ce,O[kt]=Gt),Gt.matrix.fromArray(Yt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Yt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ie.x,ie.y,ie.width,ie.height),kt===0&&(R.matrix.copy(Gt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Nt===!0&&R.cameras.push(Gt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let kt=f.getDepthInformation(_t[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let kt=0;kt<_t.length;kt++){let Yt=_t[kt].camera;if(Yt){let ie=d[Yt];ie||(ie=new ks,d[Yt]=ie);let Gt=f.getCameraImage(Yt);ie.sourceTexture=Gt}}}}for(let _t=0;_t<S.length;_t++){let Nt=b[_t],mt=S[_t];Nt!==null&&mt!==void 0&&mt.update(Nt,Q,c||o)}ne&&ne(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let Zt=new Au;Zt.setAnimationLoop(Xt),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}},E_=new At,Du=new Dt;Du.set(-1,0,0,0,1,0,0,0,1);function T_(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Bl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,I,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,I):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Re&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Re&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=t.get(d),I=E.envMap,M=E.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Du),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,I){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=I*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let b=S.program;n.uniformBlockBinding(M,b)}function c(M,S){let b=s[M.id];b===void 0&&(p(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",E));let A=S.program;n.updateUBOMapping(M,A);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let S=f();M.__bindingPointIndex=S;let b=i.createBuffer(),A=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,w=b.length;x<w;x++){let P=b[x];if(Array.isArray(P))for(let N=0,O=P.length;N<O;N++)m(P[N],x,N,A);else m(P,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,S,b,A){if(v(M,S,b,A)===!0){let x=M.__offset,w=M.value;if(Array.isArray(w)){let P=0;for(let N=0;N<w.length;N++){let O=w[N],R=d(O);_(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function _(M,S,b){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,b)}function v(M,S,b,A){let x=M.value,w=S+"_"+b;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let P=A[w];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function p(M){let S=M.uniforms,b=0,A=16;for(let w=0,P=S.length;w<P;w++){let N=Array.isArray(S[w])?S[w]:[S[w]];for(let O=0,R=N.length;O<R;O++){let C=N[O],B=Array.isArray(C.value)?C.value:[C.value];for(let W=0,X=B.length;W<X;W++){let nt=B[W],q=d(nt),j=b%A,tt=j%q.boundary,Mt=j+tt;b+=tt,Mt!==0&&A-Mt<q.storage&&(b+=A-Mt),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=q.storage}}}let x=b%A;return x>0&&(b+=A-x),M.__size=b,M.__cache={},this}function d(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",M),S}function E(M){let S=M.target;S.removeEventListener("dispose",E);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function I(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:I}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function R_(){return Rn===null&&(Rn=new Zr(C_,16,16,li,xn),Rn.name="DFG_LUT",Rn.minFilter=Ae,Rn.magFilter=Ae,Rn.wrapS=bn,Rn.wrapT=bn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var ca=class{constructor(t={}){let{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Xe}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=m,p=new Set([Eo,wo,bo]),d=new Set([Xe,gn,as,ls,Mo,So]),E=new Uint32Array(4),I=new Int32Array(4),M=new L,S=null,b=null,A=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,O=null,R=null,C=null,B=null;this._outputColorSpace=ke;let W=0,X=0,nt=null,q=-1,j=null,tt=new ce,Mt=new ce,Et=null,ne=new Lt(0),Xt=0,Zt=e.width,Z=e.height,Q=1,_t=null,Nt=null,mt=new ce(0,0,Zt,Z),Bt=new ce(0,0,Zt,Z),_e=!1,kt=new Qi,Yt=!1,ie=!1,Gt=new At,le=new L,Se=new ce,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function pe(){return nt===null?Q:1}let F=n;function Pe(y,D){return e.getContext(y,D)}let jt,T,g,z,G,Y,it,st,$,J,rt,bt,ct,ot,wt,Rt,Ut,U,at,K,lt,ft,et;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",cn,!1),F===null){let D="webgl2";if(F=Pe(D,y),F===null)throw Pe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(y){throw e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Pt("WebGLRenderer: "+y.message),y}function Tt(){jt=new Fg(F),jt.init(),lt=new S_(F,jt),T=new Tg(F,jt,t,lt),g=new v_(F,jt),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),R=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),z=new zg(F),G=new o_,Y=new M_(F,jt,g,G,T,lt,z),it=new Ug(P),st=new Vf(F),ft=new wg(F,st),$=new Og(F,st,z,ft),J=new Vg(F,$,st,ft,z),U=new kg(F,T,Y),wt=new Ag(G),rt=new r_(P,it,jt,T,ft,wt),bt=new T_(P,G),ct=new l_,ot=new p_(jt),Ut=new bg(P,it,g,J,_,l),Rt=new y_(P,J,T),et=new A_(F,z,T,g),at=new Eg(F,jt,z),K=new Bg(F,jt,z),z.programs=rt.programs,P.capabilities=T,P.extensions=jt,P.properties=G,P.renderLists=ct,P.shadowMap=Rt,P.state=g,P.info=z}v!==Xe&&(w=new Hg(v,e.width,e.height,a,s,r));let vt=new ac(P,F);this.xr=vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=jt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=jt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(Zt,Z,!1))},this.getSize=function(y){return y.set(Zt,Z)},this.setSize=function(y,D,H=!0){if(vt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=y,Z=D,e.width=Math.floor(y*Q),e.height=Math.floor(D*Q),H===!0&&(e.style.width=y+"px",e.style.height=D+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Zt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(y,D,H){Zt=y,Z=D,Q=H,e.width=Math.floor(y*H),e.height=Math.floor(D*H),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(v===Xe){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(mt)},this.setViewport=function(y,D,H,k){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,D,H,k),g.viewport(tt.copy(mt).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,D,H,k){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,D,H,k),g.scissor(Mt.copy(Bt).multiplyScalar(Q).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(y){g.setScissorTest(_e=y)},this.setOpaqueSort=function(y){_t=y},this.setTransparentSort=function(y){Nt=y},this.getClearColor=function(y){return y.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,H=!0){let k=0;if(y){let V=!1;if(nt!==null){let dt=nt.texture.format;V=p.has(dt)}if(V){let dt=nt.texture.type,gt=d.has(dt),ut=Ut.getClearColor(),xt=Ut.getClearAlpha(),St=ut.r,Ft=ut.g,Vt=ut.b;gt?(E[0]=St,E[1]=Ft,E[2]=Vt,E[3]=xt,F.clearBufferuiv(F.COLOR,0,E)):(I[0]=St,I[1]=Ft,I[2]=Vt,I[3]=xt,F.clearBufferiv(F.COLOR,0,I))}else k|=F.COLOR_BUFFER_BIT}D&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Ut.dispose(),ct.dispose(),ot.dispose(),G.dispose(),it.dispose(),J.dispose(),ft.dispose(),et.dispose(),rt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Nc),vt.removeEventListener("sessionend",Uc),di.stop()};function se(y){y.preventDefault(),Fl("WebGLRenderer: Context Lost."),N=!0}function $t(){Fl("WebGLRenderer: Context Restored."),N=!1;let y=z.autoReset,D=Rt.enabled,H=Rt.autoUpdate,k=Rt.needsUpdate,V=Rt.type;Tt(),z.autoReset=y,Rt.enabled=D,Rt.autoUpdate=H,Rt.needsUpdate=k,Rt.type=V}function cn(y){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function vn(y){let D=y.target;D.removeEventListener("dispose",vn),Ud(D)}function Ud(y){Fd(y),G.remove(y)}function Fd(y){let D=G.get(y).programs;D!==void 0&&(D.forEach(function(H){rt.releaseProgram(H)}),y.isShaderMaterial&&rt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,H,k,V,dt){D===null&&(D=He);let gt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ut=zd(y,D,H,k,V);g.setMaterial(k,gt);let xt=H.index,St=1;if(k.wireframe===!0){if(xt=$.getWireframeAttribute(H),xt===void 0)return;St=2}let Ft=H.drawRange,Vt=H.attributes.position,yt=Ft.start*St,Kt=(Ft.start+Ft.count)*St;dt!==null&&(yt=Math.max(yt,dt.start*St),Kt=Math.min(Kt,(dt.start+dt.count)*St)),xt!==null?(yt=Math.max(yt,0),Kt=Math.min(Kt,xt.count)):Vt!=null&&(yt=Math.max(yt,0),Kt=Math.min(Kt,Vt.count));let me=Kt-yt;if(me<0||me===1/0)return;ft.setup(V,k,ut,H,xt);let oe,ee=at;if(xt!==null&&(oe=st.get(xt),ee=K,ee.setIndex(oe)),V.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*pe()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(V.isLine){let Le=k.linewidth;Le===void 0&&(Le=1),g.setLineWidth(Le*pe()),V.isLineSegments?ee.setMode(F.LINES):V.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else V.isPoints?ee.setMode(F.POINTS):V.isSprite&&ee.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ee.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Le=V._multiDrawStarts,pt=V._multiDrawCounts,Be=V._multiDrawCount,qt=xt?st.get(xt).bytesPerElement:1,en=G.get(k).currentProgram.getUniforms();for(let Mn=0;Mn<Be;Mn++)en.setValue(F,"_gl_DrawID",Mn),ee.render(Le[Mn]/qt,pt[Mn])}else if(V.isInstancedMesh)ee.renderInstances(yt,me,V.count);else if(H.isInstancedBufferGeometry){let Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pt=Math.min(H.instanceCount,Le);ee.renderInstances(yt,me,pt)}else ee.render(yt,me)};function Dc(y,D,H,k){O!==null&&y.isNodeMaterial&&O.setObject(k,y),Yt===!0&&wt.setState(y,H,!1),y.transparent===!0&&y.side===on&&y.forceSinglePass===!1?(y.side=Re,y.needsUpdate=!0,ur(y,D,k),y.side=An,y.needsUpdate=!0,ur(y,D,k),y.side=on):ur(y,D,k)}this.compile=function(y,D,H=null){H===null&&(H=y),O!==null&&O.renderStart(y,D,H),b=ot.get(H),b.init(D),x.push(b),H.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==H&&y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),ie=this.localClippingEnabled,Yt=wt.init(this.clippingPlanes,ie),Yt===!0&&wt.setGlobalState(this.clippingPlanes,D),O!==null&&Rt.render(b.state.shadowsArray,H,D);let k=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let dt=V.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){let ut=dt[gt];Dc(ut,H,D,V),k.add(ut)}else Dc(dt,H,D,V),k.add(dt)}),b=x.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(y,D,H=null){let k=this.compile(y,D,H);return new Promise(V=>{function dt(){if(k.forEach(function(gt){let xt=G.get(gt).currentProgram;(xt===void 0||xt.isReady())&&k.delete(gt)}),k.size===0){V(y);return}setTimeout(dt,10)}jt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ua=null;function Od(y){Ua&&Ua(y)}function Nc(){di.stop()}function Uc(){di.start()}let di=new Au;di.setAnimationLoop(Od),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(y){Ua=y,vt.setAnimationLoop(y),y===null?di.stop():di.start()},vt.addEventListener("sessionstart",Nc),vt.addEventListener("sessionend",Uc),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(y,D);let H=vt.enabled===!0&&vt.isPresenting===!0,k=w!==null&&(nt===null||H)&&w.begin(P,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(D),D=vt.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,D,nt),b=ot.get(y,x.length),b.init(D),b.state.textureUnits=Y.getTextureUnits(),x.push(b),Gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),kt.setFromProjectionMatrix(Gt,fn,D.reversedDepth),ie=this.localClippingEnabled,Yt=wt.init(this.clippingPlanes,ie),S=ct.get(y,A.length),S.init(),A.push(S),vt.enabled===!0&&vt.isPresenting===!0){let gt=P.xr.getDepthSensingMesh();gt!==null&&Fa(gt,D,-1/0,P.sortObjects)}Fa(y,D,0,P.sortObjects),S.finish(),O!==null&&O.updateLights(b.state.lightsArray),P.sortObjects===!0&&S.sort(_t,Nt),he=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,he&&Ut.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&wt.beginShadows();let V=b.state.shadowsArray;if(Rt.render(V,y,D),Yt===!0&&wt.endShadows(),(k&&w.hasRenderPass())===!1){let gt=S.opaque,ut=S.transmissive;if(b.setupLights(),D.isArrayCamera){let xt=D.cameras;if(ut.length>0)for(let St=0,Ft=xt.length;St<Ft;St++){let Vt=xt[St];Oc(gt,ut,y,Vt)}he&&Ut.render(y);for(let St=0,Ft=xt.length;St<Ft;St++){let Vt=xt[St];Fc(S,y,Vt,Vt.viewport)}}else ut.length>0&&Oc(gt,ut,y,D),he&&Ut.render(y),Fc(S,y,D)}nt!==null&&X===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),k&&w.end(P),y.isScene===!0&&y.onAfterRender(P,y,D),ft.resetDefaultState(),q=-1,j=null,x.pop(),x.length>0?(b=x[x.length-1],Y.setTextureUnits(b.state.textureUnits),Yt===!0&&wt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,O!==null&&O.renderEnd()};function Fa(y,D,H,k){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(kt)){k&&Se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Gt);let gt=J.update(y),ut=y.material;ut.visible&&S.push(y,gt,ut,H,Se.z,null,D)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(kt))){let gt=J.update(y),ut=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Se.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Se.copy(gt.boundingSphere.center)),Se.applyMatrix4(y.matrixWorld).applyMatrix4(Gt)),Array.isArray(ut)){let xt=gt.groups;for(let St=0,Ft=xt.length;St<Ft;St++){let Vt=xt[St],yt=ut[Vt.materialIndex];yt&&yt.visible&&S.push(y,gt,yt,H,Se.z,Vt,D)}}else ut.visible&&S.push(y,gt,ut,H,Se.z,null,D)}}let dt=y.children;for(let gt=0,ut=dt.length;gt<ut;gt++)Fa(dt[gt],D,H,k)}function Fc(y,D,H,k){let{opaque:V,transmissive:dt,transparent:gt}=y;b.setupLightsView(H),Yt===!0&&wt.setGlobalState(P.clippingPlanes,H),k&&g.viewport(tt.copy(k)),V.length>0&&hr(V,D,H),dt.length>0&&hr(dt,D,H),gt.length>0&&hr(gt,D,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Oc(y,D,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let yt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new We(1,1,{generateMipmaps:!0,type:yt?xn:Xe,minFilter:oi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let dt=b.state.transmissionRenderTarget[k.id],gt=k.viewport||tt;dt.setSize(gt.z*P.transmissionResolutionScale,gt.w*P.transmissionResolutionScale);let ut=P.getRenderTarget(),xt=P.getActiveCubeFace(),St=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(ne),Xt=P.getClearAlpha(),Xt<1&&P.setClearColor(16777215,.5),P.clear(),he&&Ut.render(H);let Ft=P.toneMapping;P.toneMapping=mn;let Vt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),Yt===!0&&wt.setGlobalState(P.clippingPlanes,k),hr(y,H,k),Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Kt=0,me=D.length;Kt<me;Kt++){let oe=D[Kt],{object:ee,geometry:Le,material:pt,group:Be}=oe;if(pt.side===on&&ee.layers.test(k.layers)){let qt=pt.side;pt.side=Re,pt.needsUpdate=!0,Bc(ee,H,k,Le,pt,Be),pt.side=qt,pt.needsUpdate=!0,yt=!0}}yt===!0&&(Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt))}P.setRenderTarget(ut,xt,St),P.setClearColor(ne,Xt),Vt!==void 0&&(k.viewport=Vt),P.toneMapping=Ft}function hr(y,D,H){let k=D.isScene===!0?D.overrideMaterial:null;for(let V=0,dt=y.length;V<dt;V++){let gt=y[V],{object:ut,geometry:xt,group:St}=gt,Ft=gt.material;Ft.allowOverride===!0&&k!==null&&(Ft=k),ut.layers.test(H.layers)&&Bc(ut,D,H,xt,Ft,St)}}function Bc(y,D,H,k,V,dt){O!==null&&V.isNodeMaterial&&O.setObject(y,V),y.onBeforeRender(P,D,H,k,V,dt),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(P,D,H,k,y,dt),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=Re,V.needsUpdate=!0,P.renderBufferDirect(H,D,k,V,y,dt),V.side=An,V.needsUpdate=!0,P.renderBufferDirect(H,D,k,V,y,dt),V.side=on):P.renderBufferDirect(H,D,k,V,y,dt),y.onAfterRender(P,D,H,k,V,dt)}function ur(y,D,H){D.isScene!==!0&&(D=He);let k=G.get(y),V=b.state.lights,dt=b.state.shadowsArray,gt=V.state.version,ut=rt.getParameters(y,V.state,dt,D,H,b.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ut),St=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let Ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=it.get(y.envMap||k.environment,Ft),k.envMapRotation=k.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,St===void 0&&(y.addEventListener("dispose",vn),St=new Map,k.programs=St);let Vt=St.get(xt);if(Vt!==void 0){if(k.currentProgram===Vt&&k.lightsStateVersion===gt)return kc(y,ut),Vt}else ut.uniforms=rt.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,H,ut),y.onBeforeCompile(ut,P),Vt=rt.acquireProgram(ut,xt),St.set(xt,Vt),k.uniforms=ut.uniforms;let yt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=wt.uniform),kc(y,ut),k.needsLights=Vd(y),k.lightsStateVersion=gt,k.needsLights&&(yt.ambientLightColor.value=V.state.ambient,yt.lightProbe.value=V.state.probe,yt.sunLights.value=V.state.sun,yt.sunLightShadows.value=V.state.sunShadow,yt.directionalLights.value=V.state.directional,yt.directionalLightShadows.value=V.state.directionalShadow,yt.spotLights.value=V.state.spot,yt.spotLightShadows.value=V.state.spotShadow,yt.rectAreaLights.value=V.state.rectArea,yt.ltc_1.value=V.state.rectAreaLTC1,yt.ltc_2.value=V.state.rectAreaLTC2,yt.pointLights.value=V.state.point,yt.pointLightShadows.value=V.state.pointShadow,yt.hemisphereLights.value=V.state.hemi,yt.sunShadowMatrix.value=V.state.sunShadowMatrix,yt.sunShadowCascade.value=V.state.sunShadowCascade,yt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,yt.spotLightMatrix.value=V.state.spotLightMatrix,yt.spotLightMap.value=V.state.spotLightMap,yt.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=Vt,k.uniformsList=null,Vt}function zc(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=ds.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function kc(y,D){let H=G.get(y);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Bd(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let H=0,k=y.length;H<k;H++){let V=y[H];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function zd(y,D,H,k,V){D.isScene!==!0&&(D=He),Y.resetTextureUnits();let dt=D.fog,gt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,ut=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ht.workingColorSpace,xt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,St=it.get(k.envMap||gt,xt),Ft=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!H.morphAttributes.position,Kt=!!H.morphAttributes.normal,me=!!H.morphAttributes.color,oe=mn;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=P.toneMapping);let ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Le=ee!==void 0?ee.length:0,pt=G.get(k),Be=b.state.lights;if(Yt===!0&&(ie===!0||y!==j)){let re=y===j&&k.id===q;wt.setState(k,y,re)}let qt=!1;k.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Be.state.version||pt.outputColorSpace!==ut||V.isBatchedMesh&&pt.batching===!1||!V.isBatchedMesh&&pt.batching===!0||V.isBatchedMesh&&pt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&pt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&pt.instancing===!1||!V.isInstancedMesh&&pt.instancing===!0||V.isSkinnedMesh&&pt.skinning===!1||!V.isSkinnedMesh&&pt.skinning===!0||V.isInstancedMesh&&pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&pt.instancingMorph===!1&&V.morphTexture!==null||pt.envMap!==St||k.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==wt.numPlanes||pt.numIntersection!==wt.numIntersection)||pt.vertexAlphas!==Ft||pt.vertexTangents!==Vt||pt.morphTargets!==yt||pt.morphNormals!==Kt||pt.morphColors!==me||pt.toneMapping!==oe||pt.morphTargetsCount!==Le||!!pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,pt.__version=k.version);let en=pt.currentProgram;qt===!0&&(en=ur(k,D,V),O&&k.isNodeMaterial&&O.onUpdateProgram(k,en,pt));let Mn=!1,Gn=!1,Ri=!1,te=en.getUniforms(),de=pt.uniforms;if(g.useProgram(en.program)&&(Mn=!0,Gn=!0,Ri=!0),k.id!==q&&(q=k.id,Gn=!0),pt.needsLights){let re=Bd(b.state.lightProbeGridArray,V);pt.lightProbeGrid!==re&&(pt.lightProbeGrid=re,Gn=!0)}if(Mn||j!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),te.setValue(F,"projectionMatrix",y.projectionMatrix),te.setValue(F,"viewMatrix",y.matrixWorldInverse);let Wn=te.map.cameraPosition;Wn!==void 0&&Wn.setValue(F,le.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&te.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&te.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Gn=!0,Ri=!0)}if(pt.needsLights&&(Be.state.sunShadowMap.length>0&&te.setValue(F,"sunShadowMap",Be.state.sunShadowMap,Y),Be.state.directionalShadowMap.length>0&&te.setValue(F,"directionalShadowMap",Be.state.directionalShadowMap,Y),Be.state.spotShadowMap.length>0&&te.setValue(F,"spotShadowMap",Be.state.spotShadowMap,Y),Be.state.pointShadowMap.length>0&&te.setValue(F,"pointShadowMap",Be.state.pointShadowMap,Y)),V.isSkinnedMesh){te.setOptional(F,V,"bindMatrix"),te.setOptional(F,V,"bindMatrixInverse");let re=V.skeleton;re&&(re.boneTexture===null&&re.computeBoneTexture(),te.setValue(F,"boneTexture",re.boneTexture,Y))}V.isBatchedMesh&&(te.setOptional(F,V,"batchingTexture"),te.setValue(F,"batchingTexture",V._matricesTexture,Y),te.setOptional(F,V,"batchingIdTexture"),te.setValue(F,"batchingIdTexture",V._indirectTexture,Y),te.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&te.setValue(F,"batchingColorTexture",V._colorsTexture,Y));let Hn=H.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&U.update(V,H,en),(Gn||pt.receiveShadow!==V.receiveShadow)&&(pt.receiveShadow=V.receiveShadow,te.setValue(F,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(de.envMapIntensity.value=D.environmentIntensity),de.dfgLUT!==void 0&&(de.dfgLUT.value=R_()),Gn){if(te.setValue(F,"toneMappingExposure",P.toneMappingExposure),pt.needsLights&&kd(de,Ri),dt&&k.fog===!0&&bt.refreshFogUniforms(de,dt),bt.refreshMaterialUniforms(de,k,Q,Z,b.state.transmissionRenderTarget[y.id]),pt.needsLights&&pt.lightProbeGrid){let re=pt.lightProbeGrid;de.probesSH.value=re.texture,de.probesMin.value.copy(re.boundingBox.min),de.probesMax.value.copy(re.boundingBox.max),de.probesResolution.value.copy(re.resolution)}ds.upload(F,zc(pt),de,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ds.upload(F,zc(pt),de,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&te.setValue(F,"center",V.center),te.setValue(F,"modelViewMatrix",V.modelViewMatrix),te.setValue(F,"normalMatrix",V.normalMatrix),te.setValue(F,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let re=k.uniformsGroups;for(let Wn=0,Ii=re.length;Wn<Ii;Wn++){let Gc=re[Wn];et.update(Gc,en),et.bind(Gc,en)}}return en}function kd(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Vd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,D,H){let k=G.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(y.texture).__webglTexture=D,G.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let H=G.get(y);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,H=0){nt=y,W=D,X=H;let k=null,V=!1,dt=!1;if(y){let ut=G.get(y);if(ut.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(y.viewport),Mt.copy(y.scissor),Et=y.scissorTest,g.viewport(tt),g.scissor(Mt),g.setScissorTest(Et),q=-1;return}else if(ut.__webglFramebuffer===void 0)Y.setupRenderTarget(y);else if(ut.__hasExternalTextures)Y.rebindTextures(y,G.get(y.texture).__webglTexture,G.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ft=y.depthTexture;if(ut.__boundDepthTexture!==Ft){if(Ft!==null&&G.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(y)}}let xt=y.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let St=G.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(St[D])?k=St[D][H]:k=St[D],V=!0):y.samples>0&&Y.useMultisampledRTT(y)===!1?k=G.get(y).__webglMultisampledFramebuffer:Array.isArray(St)?k=St[H]:k=St,tt.copy(y.viewport),Mt.copy(y.scissor),Et=y.scissorTest}else tt.copy(mt).multiplyScalar(Q).floor(),Mt.copy(Bt).multiplyScalar(Q).floor(),Et=_e;if(H!==0&&(k=R),g.bindFramebuffer(F.FRAMEBUFFER,k)&&g.drawBuffers(y,k),g.viewport(tt),g.scissor(Mt),g.setScissorTest(Et),V){let ut=G.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,H)}else if(dt){let ut=D;for(let xt=0;xt<y.textures.length;xt++){let St=G.get(y.textures[xt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+xt,St.__webglTexture,H,ut)}}else if(y!==null&&H!==0){let ut=G.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ut.__webglTexture,H)}q=-1};function Vc(y){let D=G.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=T.textureFormatReadable(y.format),D.__typeReadable=T.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,H,k,V,dt,gt,ut=0){if(!(y&&y.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=G.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){g.bindFramebuffer(F.FRAMEBUFFER,xt);try{let St=y.textures[ut],Ft=St.format,Vt=St.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);let yt=Vc(St);if(yt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-k&&H>=0&&H<=y.height-V&&F.readPixels(D,H,k,V,lt.convert(Ft),lt.convert(Vt),dt)}finally{let St=nt!==null?G.get(nt).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,D,H,k,V,dt,gt,ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=G.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(D>=0&&D<=y.width-k&&H>=0&&H<=y.height-V){g.bindFramebuffer(F.FRAMEBUFFER,xt);let St=y.textures[ut],Ft=St.format,Vt=St.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);let yt=Vc(St);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.bufferData(F.PIXEL_PACK_BUFFER,dt.byteLength,F.STREAM_READ),F.readPixels(D,H,k,V,lt.convert(Ft),lt.convert(Vt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let me=nt!==null?G.get(nt).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,me);let oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tu(F,oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,dt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Kt),F.deleteSync(oe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,H=0){let k=Math.pow(2,-H),V=Math.floor(y.image.width*k),dt=Math.floor(y.image.height*k),gt=D!==null?D.x:0,ut=D!==null?D.y:0;Y.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,gt,ut,V,dt),g.unbindTexture()},this.copyTextureToTexture=function(y,D,H=null,k=null,V=0,dt=0){let gt,ut,xt,St,Ft,Vt,yt,Kt,me,oe=y.isCompressedTexture?y.mipmaps[dt]:y.image;if(H!==null)gt=H.max.x-H.min.x,ut=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Ft=H.min.y,Vt=H.isBox3?H.min.z:0;else{let de=Math.pow(2,-V);gt=Math.floor(oe.width*de),ut=Math.floor(oe.height*de),y.isDataArrayTexture?xt=oe.depth:y.isData3DTexture?xt=Math.floor(oe.depth*de):xt=1,St=0,Ft=0,Vt=0}k!==null?(yt=k.x,Kt=k.y,me=k.z):(yt=0,Kt=0,me=0);let ee=lt.convert(D.format),Le=lt.convert(D.type),pt;D.isData3DTexture?(Y.setTexture3D(D,0),pt=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),pt=F.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),pt=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let Be=g.getParameter(F.UNPACK_ROW_LENGTH),qt=g.getParameter(F.UNPACK_IMAGE_HEIGHT),en=g.getParameter(F.UNPACK_SKIP_PIXELS),Mn=g.getParameter(F.UNPACK_SKIP_ROWS),Gn=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,oe.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,St),g.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt);let Ri=y.isDataArrayTexture||y.isData3DTexture,te=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let de=G.get(y),Hn=G.get(D),re=G.get(de.__renderTarget),Wn=G.get(Hn.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,re.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ii=0;Ii<xt;Ii++)Ri&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(y).__webglTexture,V,Vt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(D).__webglTexture,dt,me+Ii)),F.blitFramebuffer(St,Ft,gt,ut,yt,Kt,gt,ut,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||G.has(y)){let de=G.get(y),Hn=G.get(D);g.bindFramebuffer(F.READ_FRAMEBUFFER,C),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let re=0;re<xt;re++)Ri?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.__webglTexture,V,Vt+re):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,V),te?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Hn.__webglTexture,dt,me+re):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Hn.__webglTexture,dt),V!==0?F.blitFramebuffer(St,Ft,gt,ut,yt,Kt,gt,ut,F.COLOR_BUFFER_BIT,F.NEAREST):te?F.copyTexSubImage3D(pt,dt,yt,Kt,me+re,St,Ft,gt,ut):F.copyTexSubImage2D(pt,dt,yt,Kt,St,Ft,gt,ut);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else te?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(pt,dt,yt,Kt,me,gt,ut,xt,ee,Le,oe.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(pt,dt,yt,Kt,me,gt,ut,xt,ee,oe.data):F.texSubImage3D(pt,dt,yt,Kt,me,gt,ut,xt,ee,Le,oe):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,dt,yt,Kt,gt,ut,ee,Le,oe.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,dt,yt,Kt,oe.width,oe.height,ee,oe.data):F.texSubImage2D(F.TEXTURE_2D,dt,yt,Kt,gt,ut,ee,Le,oe);g.pixelStorei(F.UNPACK_ROW_LENGTH,Be),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),g.pixelStorei(F.UNPACK_SKIP_PIXELS,en),g.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Gn),dt===0&&D.generateMipmaps&&F.generateMipmap(pt),g.unbindTexture()},this.initRenderTarget=function(y){G.get(y).__webglFramebuffer===void 0&&Y.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Y.setTextureCube(y,0):y.isData3DTexture?Y.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Y.setTexture2DArray(y,0):Y.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){W=0,X=0,nt=null,g.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var ps={ko:{"app.title":"\uC815\uC721\uBA74\uCCB4\uC758 \uC804\uAC1C\uB3C4","mode.label":"\uD65C\uB3D9","mode.make":"\uC804\uAC1C\uB3C4 \uB9CC\uB4E4\uAE30","mode.transform":"\uC804\uAC1C\uB3C4 \uBC14\uAFB8\uAE30","tool.labelsHide":"\uBA74 \uBC88\uD638 \uC228\uAE30\uAE30","tool.labelsShow":"\uBA74 \uBC88\uD638 \uBCF4\uC774\uAE30","tool.foldAll":"\uC815\uC721\uBA74\uCCB4\uB85C \uC811\uAE30","tool.unfoldAll":"\uC804\uAC1C\uB3C4\uB85C \uD3BC\uCE58\uAE30","tool.flip":"\uC804\uAC1C\uB3C4 \uB4A4\uC9D1\uAE30","tool.undo":"\uB418\uB3CC\uB9AC\uAE30","tool.newCube":"\uC790\uB974\uC9C0 \uC54A\uC740 \uC0C8 \uC815\uC721\uBA74\uCCB4\uB85C \uB2E4\uC2DC \uC2DC\uC791","tool.newNet":"\uB2E4\uB978 \uC804\uAC1C\uB3C4","tool.language":"\uC5B8\uC5B4","toolbar.labelsHide":"\uBC88\uD638 \uC228\uAE30\uAE30","toolbar.labelsShow":"\uBC88\uD638 \uBCF4\uC774\uAE30","toolbar.foldAll":"\uBAA8\uB450 \uC811\uAE30","toolbar.unfoldAll":"\uBAA8\uB450 \uD3BC\uCE58\uAE30","toolbar.flip":"\uB4A4\uC9D1\uAE30","toolbar.undo":"\uB418\uB3CC\uB9AC\uAE30","toolbar.newCube":"\uC0C8 \uC815\uC721\uBA74\uCCB4","toolbar.newNet":"\uB2E4\uB978 \uC804\uAC1C\uB3C4","toolbar.language":"\uC5B8\uC5B4","settings.title":"\uC5B8\uC5B4","settings.close":"\uB2EB\uAE30","erase.title":"\uB9CC\uB4E0 \uC804\uAC1C\uB3C4\uB97C \uBAA8\uB450 \uC9C0\uC6B8\uAE4C\uC694?","erase.warning":"\uC9C0\uAE08\uAE4C\uC9C0 \uCC3E\uC740 \uC804\uAC1C\uB3C4\uC640 \uD558\uB358 \uC791\uC5C5\uC774 \uBAA8\uB450 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4. \uC9C0\uC6B4 \uB4A4\uC5D0\uB294 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","erase.confirm":"\uBAA8\uB450 \uC9C0\uC6B0\uAE30","erase.cancel":"\uCDE8\uC18C","erase.done":"\uBAA8\uB450 \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC2DC\uC791\uD569\uB2C8\uB2E4.","view.canvas":"\uC815\uC721\uBA74\uCCB4\uC640 \uC804\uAC1C\uB3C4\uB97C \uBCF4\uC5EC \uC8FC\uB294 3D \uC791\uC5C5 \uC601\uC5ED","action.cut":"\uC790\uB974\uAE30","action.unfold":"\uD3BC\uCE58\uAE30","action.fold":"\uC811\uAE30","tray.title":"\uB9CC\uB4E0 \uC804\uAC1C\uB3C4","tray.erase":"\uB9CC\uB4E0 \uC804\uAC1C\uB3C4 \uC9C0\uC6B0\uAE30","tray.itemMade":"\uC804\uAC1C\uB3C4 {n}: \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4","tray.itemMissing":"\uC804\uAC1C\uB3C4 {n}: \uC544\uC9C1 \uB9CC\uB4E4\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4","tray.goal":"\uC5F0\uD55C \uC804\uAC1C\uB3C4\uB294 \uC544\uC9C1 \uB9CC\uB4E4\uC9C0 \uC54A\uC740 \uC804\uAC1C\uB3C4\uC785\uB2C8\uB2E4. \uBA74\uC744 \uC62E\uACA8\uC11C \uBAA8\uB450 \uCC3E\uC544\uBCF4\uC138\uC694.","fold.cube":"\uC815\uC721\uBA74\uCCB4\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBAA8\uB450 \uD3BC\uCE58\uAE30\uB97C \uB204\uB974\uBA74 \uB2E4\uC2DC \uC804\uAC1C\uB3C4\uB85C \uD3BC\uCCD0\uC9D1\uB2C8\uB2E4.","fold.unfoldFirst":"\uBA3C\uC800 \uBAA8\uB450 \uD3BC\uCE58\uAE30\uB97C \uB20C\uB7EC \uC804\uAC1C\uB3C4\uB85C \uD3BC\uCE58\uC138\uC694.","tray.loaded":"\uB9CC\uB4E0 \uC804\uAC1C\uB3C4\uB97C \uB2E4\uC2DC \uB193\uC558\uC2B5\uB2C8\uB2E4. \uBAA8\uB450 \uC811\uAE30\uB97C \uB204\uB974\uBA74 \uC815\uC721\uBA74\uCCB4\uB85C \uC811\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","tray.locked":"\uC544\uC9C1 \uB9CC\uB4E4\uC9C0 \uC54A\uC740 \uC804\uAC1C\uB3C4\uC785\uB2C8\uB2E4. \uBA74\uC744 \uC62E\uACA8\uC11C \uC774 \uBAA8\uC591\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694.","hint.start":"\uBAA8\uC11C\uB9AC\uB97C \uB20C\uB7EC \uACE0\uB978 \uB4A4 \uAC00\uC704\uB85C \uC798\uB77C \uBCF4\uC138\uC694. \uD654\uBA74\uC744 \uB04C\uBA74 \uC815\uC721\uBA74\uCCB4\uB97C \uB3CC\uB824 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.","hint.tapFace":"\uD3BC\uCE60 \uC218 \uC788\uB294 \uBA74\uC774 \uC740\uC740\uD558\uAC8C \uBE5B\uB0A9\uB2C8\uB2E4. \uADF8 \uBA74\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694.","hint.predict":"\uC774 \uBA74\uC744 \uD3BC\uCE58\uBA74 \uC5B4\uB514\uC5D0 \uB193\uC77C\uAE4C\uC694? \uC54C\uB9DE\uC740 \uC790\uB9AC\uB97C \uB20C\uB7EC \uBCF4\uC138\uC694.","hint.wrong":"\uADF8 \uC790\uB9AC\uAC00 \uC544\uB2D9\uB2C8\uB2E4. \uBA74\uC740 \uC798\uB9AC\uC9C0 \uC54A\uC740 \uBAA8\uC11C\uB9AC\uB97C \uCD95\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4.","hint.wrongAgain":"\uAC15\uC870\uB41C \uBAA8\uC11C\uB9AC\uB97C \uCD95\uC73C\uB85C \uBA74\uC774 \uB3CC\uC544\uAC04\uB2E4\uACE0 \uC0DD\uAC01\uD574 \uBCF4\uC138\uC694.","hint.right":"\uB9DE\uC2B5\uB2C8\uB2E4. \uBA74\uC774 \uC798\uB9AC\uC9C0 \uC54A\uC740 \uBAA8\uC11C\uB9AC\uB97C \uCD95\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4.","hint.again":"\uC0C8 \uC815\uC721\uBA74\uCCB4\uC785\uB2C8\uB2E4. \uC774\uBC88\uC5D0\uB294 \uB2E4\uB978 \uBAA8\uC11C\uB9AC\uB97C \uC798\uB77C \uBCF4\uC138\uC694.","net.verified":"\uC815\uC721\uBA74\uCCB4\uC758 \uC804\uAC1C\uB3C4\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4. \uBAA8\uC11C\uB9AC {cuts}\uAC1C\uB97C \uC790\uB974\uACE0 {folds}\uAC1C\uB97C \uC811\uB294 \uC120\uC73C\uB85C \uB0A8\uACBC\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC811\uC73C\uBA74 \uBE48\uD2C8\uC5C6\uC774 \uC815\uC721\uBA74\uCCB4\uAC00 \uB429\uB2C8\uB2E4.","net.found":"\uCD95\uD558\uD569\uB2C8\uB2E4! \uC0C8\uB85C\uC6B4 \uC804\uAC1C\uB3C4\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4. {total}\uAC1C \uC911 {count}\uAC1C\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4.","net.allFound":"\uCD95\uD558\uD569\uB2C8\uB2E4! \uC815\uC721\uBA74\uCCB4\uC758 \uC804\uAC1C\uB3C4 {total}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC2B5\uB2C8\uB2E4.","net.unchanged":"\uBA74 {n}\uC758 \uC704\uCE58\uB294 \uBC14\uB00C\uC5C8\uC9C0\uB9CC \uC804\uAC1C\uB3C4\uC758 \uBAA8\uC591\uC740 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4. \uB3CC\uB9AC\uAC70\uB098 \uB4A4\uC9D1\uC73C\uBA74 \uAF2D \uB9DE\uAC8C \uACB9\uCE69\uB2C8\uB2E4.","net.same":"\uC774\uBBF8 \uB9CC\uB4E0 \uC804\uAC1C\uB3C4\uC640 \uAC19\uC740 \uBAA8\uC591\uC785\uB2C8\uB2E4. \uB3CC\uB9AC\uAC70\uB098 \uB4A4\uC9D1\uC73C\uBA74 \uAF2D \uB9DE\uAC8C \uACB9\uCE69\uB2C8\uB2E4.","net.invalid":"\uC544\uC9C1 \uC815\uC721\uBA74\uCCB4\uC758 \uC804\uAC1C\uB3C4\uAC00 \uC544\uB2D9\uB2C8\uB2E4.","a3.pickFace":"\uC62E\uAE30\uACE0 \uC2F6\uC740 \uBA74\uC744 \uB204\uB974\uC138\uC694. \uD55C \uBAA8\uC11C\uB9AC\uC5D0\uB9CC \uBD99\uC5B4 \uC788\uB294 \uBA74(\uBE5B\uB098\uB294 \uBA74)\uC744 \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","a3.pickPlace":"\uC774 \uBA74\uC744 \uC5B4\uB514\uB85C \uC62E\uAE38 \uC218 \uC788\uC744\uAE4C\uC694? \uC54C\uB9DE\uC740 \uC790\uB9AC\uB97C \uB204\uB974\uC138\uC694.","a3.wrong":"\uADF8 \uC790\uB9AC\uC5D0 \uB450\uACE0 \uC811\uC73C\uBA74 \uBA74 {a}, \uBA74 {b}\uC758 \uC790\uB9AC\uAC00 \uACB9\uCE69\uB2C8\uB2E4.","a3.wrongGeneric":"\uADF8 \uC790\uB9AC\uC5D0 \uB450\uBA74 \uC811\uC5C8\uC744 \uB54C \uC815\uC721\uBA74\uCCB4\uAC00 \uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","a3.moved":"\uBA74 {n}\uC758 \uC704\uCE58\uAC00 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.","a3.moreSpots":"\uC774 \uBA74\uC740 \uC9C0\uAE08 \uC790\uB9AC\uC5D0\uC11C {count}\uACF3\uC73C\uB85C \uB354 \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCC3E\uC544\uBCF4\uC138\uC694.","a3.flipped":"\uC804\uAC1C\uB3C4\uB97C \uB4A4\uC9D1\uC5C8\uC2B5\uB2C8\uB2E4. \uB4A4\uC9D1\uC5B4\uB3C4 \uAC19\uC740 \uC804\uAC1C\uB3C4\uC785\uB2C8\uB2E4.","a3.notOuter":"\uD55C \uBAA8\uC11C\uB9AC\uC5D0\uB9CC \uBD99\uC5B4 \uC788\uB294 \uBA74\uB9CC \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","msg.alreadyCut":"\uC774\uBBF8 \uC790\uB978 \uBAA8\uC11C\uB9AC\uC785\uB2C8\uB2E4.","msg.wouldSplit":"\uC774 \uBAA8\uC11C\uB9AC\uAE4C\uC9C0 \uC790\uB974\uBA74 \uC885\uC774\uAC00 \uB450 \uC870\uAC01\uC73C\uB85C \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4. \uC774 \uBAA8\uC11C\uB9AC\uB294 \uBA74\uC744 \uD3BC\uCE60 \uB54C \uC811\uB294 \uC120\uC774 \uB429\uB2C8\uB2E4.","error.webgl":"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uD654\uBA74(WebGL 2)\uC744 \uC4F8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uCD5C\uC2E0 Chrome, Edge, Safari\uC5D0\uC11C \uC5F4\uC5B4 \uC8FC\uC138\uC694."},en:{"app.title":"Nets of a Cube","mode.label":"Activity","mode.make":"Make a net","mode.transform":"Change a net","tool.labelsHide":"Hide face numbers","tool.labelsShow":"Show face numbers","tool.foldAll":"Fold into a cube","tool.unfoldAll":"Unfold into the net","tool.flip":"Turn the net over","tool.undo":"Undo","tool.newCube":"Start again with a new, uncut cube","tool.newNet":"Another net","tool.language":"Language","toolbar.labelsHide":"Hide numbers","toolbar.labelsShow":"Show numbers","toolbar.foldAll":"Fold up","toolbar.unfoldAll":"Unfold","toolbar.flip":"Turn over","toolbar.undo":"Undo","toolbar.newCube":"New cube","toolbar.newNet":"Another net","toolbar.language":"Language","settings.title":"Language","settings.close":"Close","erase.title":"Erase all the nets you made?","erase.warning":"All the nets you have found and your current work will be erased. This cannot be undone.","erase.confirm":"Erase everything","erase.cancel":"Cancel","erase.done":"Everything has been erased. You are starting again.","view.canvas":"3D work area showing the cube and its net","action.cut":"Cut","action.unfold":"Unfold","action.fold":"Fold","tray.title":"Nets made","tray.erase":"Erase my nets","tray.itemMade":"Net {n}: made","tray.itemMissing":"Net {n}: not made yet","tray.goal":"Faint nets are the ones you have not made yet. Move faces to find them all.","fold.cube":"It is a cube now. Press Unfold to open it into the net again.","fold.unfoldFirst":"First press Unfold to open the cube into its net.","tray.loaded":"Your net is laid out again. Press Fold up to fold it into a cube.","tray.locked":"You have not made this net yet. Move faces to make this shape.","hint.start":"Tap an edge to choose it, then cut it with the scissors. Drag to turn the cube.","hint.tapFace":"The faces that can open now are glowing. Tap one.","hint.predict":"Where will this face land when it unfolds? Tap the right place.","hint.wrong":"Not there. A face turns about an edge that is not cut.","hint.wrongAgain":"Imagine the face turning about the highlighted edge.","hint.right":"Correct. The face turns about the edge that is not cut.","hint.again":"Here is a new cube. This time, cut different edges.","net.verified":"This is a net of a cube: {cuts} edges cut, {folds} fold lines kept. Folded up again, it closes into a cube with no gaps.","net.found":"Well done! You found a new net. That is {count} of {total}.","net.allFound":"Congratulations! You have found all {total} nets of a cube.","net.unchanged":"Face {n} moved, but the net still has the same shape: turn or flip it and they match exactly.","net.same":"This net has the same shape as one you already made: turn or flip it and they match exactly.","net.invalid":"This is not a net of a cube yet.","a3.pickFace":"Tap the face you want to move. Glowing faces \u2014 held by only one edge \u2014 can move.","a3.pickPlace":"Where can this face go? Tap the right place.","a3.wrong":"If the face goes there, faces {a} and {b} land on the same side of the cube when folded.","a3.wrongGeneric":"If the face goes there, the paper does not fold into a cube.","a3.moved":"Face {n} has moved.","a3.moreSpots":{one:"From here, this face can move to {count} more place. Can you find it?",other:"From here, this face can move to {count} more places. Can you find them?"},"a3.flipped":"The net is turned over. It is still the same net.","a3.notOuter":"Only a face held by one edge can be moved.","msg.alreadyCut":"This edge is already cut.","msg.wouldSplit":"Cutting this edge would split the paper into two pieces. This edge becomes the fold line when the face opens.","error.webgl":"3D (WebGL 2) is not available in this browser. Please open the page in a recent Chrome, Edge or Safari."},ru:{"app.title":"\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u043A\u0443\u0431\u0430","mode.label":"\u0417\u0430\u0434\u0430\u043D\u0438\u0435","mode.make":"\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0443","mode.transform":"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0443","tool.labelsHide":"\u0421\u043A\u0440\u044B\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430 \u0433\u0440\u0430\u043D\u0435\u0439","tool.labelsShow":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430 \u0433\u0440\u0430\u043D\u0435\u0439","tool.foldAll":"\u0421\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u043A\u0443\u0431","tool.unfoldAll":"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0443","tool.flip":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0443","tool.undo":"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C","tool.newCube":"\u041D\u0430\u0447\u0430\u0442\u044C \u0441 \u043D\u043E\u0432\u043E\u0433\u043E, \u043D\u0435\u0440\u0430\u0437\u0440\u0435\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u0443\u0431\u0430","tool.newNet":"\u0414\u0440\u0443\u0433\u0430\u044F \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430","tool.language":"\u042F\u0437\u044B\u043A","toolbar.labelsHide":"\u0421\u043A\u0440\u044B\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430","toolbar.labelsShow":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430","toolbar.foldAll":"\u0421\u043B\u043E\u0436\u0438\u0442\u044C","toolbar.unfoldAll":"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C","toolbar.flip":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C","toolbar.undo":"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C","toolbar.newCube":"\u041D\u043E\u0432\u044B\u0439 \u043A\u0443\u0431","toolbar.newNet":"\u0414\u0440\u0443\u0433\u0430\u044F \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430","toolbar.language":"\u042F\u0437\u044B\u043A","settings.title":"\u042F\u0437\u044B\u043A","settings.close":"\u0417\u0430\u043A\u0440\u044B\u0442\u044C","erase.title":"\u0421\u0442\u0435\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438?","erase.warning":"\u0412\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u0438 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B. \u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0445 \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u043B\u044C\u0437\u044F.","erase.confirm":"\u0421\u0442\u0435\u0440\u0435\u0442\u044C \u0432\u0441\u0451","erase.cancel":"\u041E\u0442\u043C\u0435\u043D\u0430","erase.done":"\u0412\u0441\u0451 \u0441\u0442\u0451\u0440\u0442\u043E. \u041D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441\u043D\u0430\u0447\u0430\u043B\u0430.","view.canvas":"\u0422\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0441 \u043A\u0443\u0431\u043E\u043C \u0438 \u0435\u0433\u043E \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u043E\u0439","action.cut":"\u0420\u0430\u0437\u0440\u0435\u0437\u0430\u0442\u044C","action.unfold":"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C","action.fold":"\u0421\u043E\u0433\u043D\u0443\u0442\u044C","tray.title":"\u041D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438","tray.erase":"\u0421\u0442\u0435\u0440\u0435\u0442\u044C \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438","tray.itemMade":"\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 {n}: \u043D\u0430\u0439\u0434\u0435\u043D\u0430","tray.itemMissing":"\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 {n}: \u0435\u0449\u0451 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430","tray.goal":"\u0411\u043B\u0435\u0434\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u0435\u0449\u0451 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B. \u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u0432\u0441\u0435.","fold.cube":"\u041F\u043E\u043B\u0443\u0447\u0438\u043B\u0441\u044F \u043A\u0443\u0431. \u041D\u0430\u0436\u043C\u0438 \xAB\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0443.","fold.unfoldFirst":"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0436\u043C\u0438 \xAB\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u043B\u043E\u0436\u0438\u0442\u044C \u043A\u0443\u0431 \u0432 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0443.","tray.loaded":"\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 \u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u0441\u0442\u043E\u043B\u0435. \u041D\u0430\u0436\u043C\u0438 \xAB\u0421\u043B\u043E\u0436\u0438\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u0441\u043B\u043E\u0436\u0438\u0442\u044C \u0435\u0451 \u0432 \u043A\u0443\u0431.","tray.locked":"\u0422\u0430\u043A\u043E\u0439 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u0443 \u0442\u0435\u0431\u044F \u0435\u0449\u0451 \u043D\u0435\u0442. \u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0442\u0430\u043A\u0443\u044E \u0444\u043E\u0440\u043C\u0443.","hint.start":"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0440\u0435\u0431\u0440\u043E, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0433\u043E, \u0438 \u0440\u0430\u0437\u0440\u0435\u0436\u044C \u043D\u043E\u0436\u043D\u0438\u0446\u0430\u043C\u0438. \u041F\u043E\u0442\u044F\u043D\u0438 \u044D\u043A\u0440\u0430\u043D, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043A\u0443\u0431.","hint.tapFace":"\u0413\u0440\u0430\u043D\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C, \u0441\u0432\u0435\u0442\u044F\u0442\u0441\u044F. \u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043D\u0438\u0445.","hint.predict":"\u041A\u0443\u0434\u0430 \u043B\u044F\u0436\u0435\u0442 \u044D\u0442\u0430 \u0433\u0440\u0430\u043D\u044C, \u0435\u0441\u043B\u0438 \u0435\u0451 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C? \u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043D\u0443\u0436\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E.","hint.wrong":"\u041D\u0435 \u0441\u044E\u0434\u0430. \u0413\u0440\u0430\u043D\u044C \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u043A\u0440\u0443\u0433 \u0440\u0435\u0431\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435 \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u043D\u043E.","hint.wrongAgain":"\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C, \u0447\u0442\u043E \u0433\u0440\u0430\u043D\u044C \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u043A\u0440\u0443\u0433 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0431\u0440\u0430.","hint.right":"\u0412\u0435\u0440\u043D\u043E! \u0413\u0440\u0430\u043D\u044C \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0440\u0430\u0437\u0440\u0435\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0431\u0440\u0430.","hint.again":"\u0412\u043E\u0442 \u043D\u043E\u0432\u044B\u0439 \u043A\u0443\u0431. \u0422\u0435\u043F\u0435\u0440\u044C \u0440\u0430\u0437\u0440\u0435\u0436\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0451\u0431\u0440\u0430.","net.verified":"\u042D\u0442\u043E \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 \u043A\u0443\u0431\u0430: \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u043D\u043E \u0440\u0451\u0431\u0435\u0440 \u2014 {cuts}, \u043B\u0438\u043D\u0438\u0439 \u0441\u0433\u0438\u0431\u0430 \u2014 {folds}. \u0415\u0441\u043B\u0438 \u0441\u043D\u043E\u0432\u0430 \u0441\u043E\u0433\u043D\u0443\u0442\u044C, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F \u043A\u0443\u0431 \u0431\u0435\u0437 \u0449\u0435\u043B\u0435\u0439.","net.found":"\u041E\u0442\u043B\u0438\u0447\u043D\u043E! \u041D\u0430\u0439\u0434\u0435\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430. \u041D\u0430\u0439\u0434\u0435\u043D\u043E {count} \u0438\u0437 {total}.","net.allFound":"\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u041D\u0430\u0439\u0434\u0435\u043D\u044B \u0432\u0441\u0435 {total} \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043E\u043A \u043A\u0443\u0431\u0430.","net.unchanged":"\u0413\u0440\u0430\u043D\u044C {n} \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u0430, \u043D\u043E \u0444\u043E\u0440\u043C\u0430 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u043F\u0440\u0435\u0436\u043D\u0435\u0439: \u0435\u0441\u043B\u0438 \u0435\u0451 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C, \u043E\u043D\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0443\u0442.","net.same":"\u0422\u0430\u043A\u0430\u044F \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C: \u0435\u0441\u043B\u0438 \u0435\u0451 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C, \u043E\u043D\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0443\u0442.","net.invalid":"\u042D\u0442\u043E \u0435\u0449\u0451 \u043D\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 \u043A\u0443\u0431\u0430.","a3.pickFace":"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0433\u0440\u0430\u043D\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0445\u043E\u0447\u0435\u0448\u044C \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438. \u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0435\u0441\u044F \u0433\u0440\u0430\u043D\u0438 \u2014 \u0442\u0435, \u0447\u0442\u043E \u0434\u0435\u0440\u0436\u0430\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0440\u0435\u0431\u0440\u0435.","a3.pickPlace":"\u041A\u0443\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u044D\u0442\u0443 \u0433\u0440\u0430\u043D\u044C? \u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043D\u0443\u0436\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E.","a3.wrong":"\u0415\u0441\u043B\u0438 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u0433\u0440\u0430\u043D\u044C \u0441\u044E\u0434\u0430, \u043F\u0440\u0438 \u0441\u0433\u0438\u0431\u0430\u043D\u0438\u0438 \u0433\u0440\u0430\u043D\u0438 {a} \u0438 {b} \u043E\u043A\u0430\u0436\u0443\u0442\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435.","a3.wrongGeneric":"\u0415\u0441\u043B\u0438 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u0433\u0440\u0430\u043D\u044C \u0441\u044E\u0434\u0430, \u043A\u0443\u0431 \u043D\u0435 \u0441\u043B\u043E\u0436\u0438\u0442\u0441\u044F.","a3.moved":"\u0413\u0440\u0430\u043D\u044C {n} \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u0430.","a3.moreSpots":{one:"\u041E\u0442\u0441\u044E\u0434\u0430 \u044D\u0442\u0443 \u0433\u0440\u0430\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0435\u0449\u0451 \u0432 {count} \u043C\u0435\u0441\u0442\u043E. \u041D\u0430\u0439\u0434\u0438 \u0435\u0433\u043E.",few:"\u041E\u0442\u0441\u044E\u0434\u0430 \u044D\u0442\u0443 \u0433\u0440\u0430\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0435\u0449\u0451 \u0432 {count} \u043C\u0435\u0441\u0442\u0430. \u041D\u0430\u0439\u0434\u0438 \u0438\u0445.",many:"\u041E\u0442\u0441\u044E\u0434\u0430 \u044D\u0442\u0443 \u0433\u0440\u0430\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0435\u0449\u0451 \u0432 {count} \u043C\u0435\u0441\u0442. \u041D\u0430\u0439\u0434\u0438 \u0438\u0445.",other:"\u041E\u0442\u0441\u044E\u0434\u0430 \u044D\u0442\u0443 \u0433\u0440\u0430\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0435\u0449\u0451 \u0432 {count} \u043C\u0435\u0441\u0442\u0430. \u041D\u0430\u0439\u0434\u0438 \u0438\u0445."},"a3.flipped":"\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0451\u0440\u043D\u0443\u0442\u0430. \u042D\u0442\u043E \u0442\u0430 \u0436\u0435 \u0441\u0430\u043C\u0430\u044F \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0430.","a3.notOuter":"\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0433\u0440\u0430\u043D\u044C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0440\u0435\u0431\u0440\u0435.","msg.alreadyCut":"\u042D\u0442\u043E \u0440\u0435\u0431\u0440\u043E \u0443\u0436\u0435 \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u043D\u043E.","msg.wouldSplit":"\u0415\u0441\u043B\u0438 \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u0442\u044C \u0438 \u044D\u0442\u043E \u0440\u0435\u0431\u0440\u043E, \u0431\u0443\u043C\u0430\u0433\u0430 \u0440\u0430\u0441\u043F\u0430\u0434\u0451\u0442\u0441\u044F \u043D\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438. \u041F\u043E \u044D\u0442\u043E\u043C\u0443 \u0440\u0435\u0431\u0440\u0443 \u0433\u0440\u0430\u043D\u044C \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0438\u0431\u0430\u0442\u044C\u0441\u044F.","error.webgl":"\u0412 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C (WebGL 2). \u041E\u0442\u043A\u0440\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 Chrome, Edge \u0438\u043B\u0438 Safari."}},lc=[{code:"ko",name:"\uD55C\uAD6D\uC5B4"},{code:"en",name:"English"},{code:"ru",name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"}];var Uu="cube-net.lang",Ei="ko",cc=new Set;try{let i=localStorage.getItem(Uu);i&&ps[i]&&(Ei=i)}catch{}function fe(i,t={}){let n=(ps[Ei]??ps.ko)[i]??ps.ko[i]??i;if(typeof n=="object"){let s=new Intl.PluralRules(Ei).select(Number(t.count??0));n=n[s]??n.other}return n.replace(/\{(\w+)\}/g,(s,r)=>r in t?t[r]:`{${r}}`)}function Fu(){return Ei}function Ou(i){if(!(!ps[i]||i===Ei)){Ei=i;try{localStorage.setItem(Uu,i)}catch{}document.documentElement.lang=i,da();for(let t of cc)t(i)}}function hc(i){return cc.add(i),()=>cc.delete(i)}function da(i=document){document.documentElement.lang=Ei,i.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=fe(t.dataset.i18n)}),i.querySelectorAll("[data-i18n-title]").forEach(t=>{t.title=fe(t.dataset.i18nTitle)}),i.querySelectorAll("[data-i18n-aria]").forEach(t=>{t.setAttribute("aria-label",fe(t.dataset.i18nAria))}),i===document&&(document.title=fe("app.title"))}var Bu=[{id:"F1",number:1,place:"bottom",axis:1,sign:-1},{id:"F2",number:2,place:"front",axis:2,sign:1},{id:"F3",number:3,place:"right",axis:0,sign:1},{id:"F4",number:4,place:"back",axis:2,sign:-1},{id:"F5",number:5,place:"left",axis:0,sign:-1},{id:"F6",number:6,place:"top",axis:1,sign:1}],zM=Bu.map(i=>i.id),kn="F1",I_=1e-9,Ie={add:(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],sub:(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],scale:(i,t)=>[i[0]*t,i[1]*t,i[2]*t],dot:(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],cross:(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],len:i=>Math.hypot(i[0],i[1],i[2]),norm:i=>{let t=Math.hypot(i[0],i[1],i[2]);return[i[0]/t,i[1]/t,i[2]/t]},eq:(i,t,e=1e-6)=>Math.abs(i[0]-t[0])<e&&Math.abs(i[1]-t[1])<e&&Math.abs(i[2]-t[2])<e};function P_(){let i=[];for(let t=0;t<8;t++)i.push([t&1?.5:-.5,t&2?1:0,t&4?.5:-.5]);return i}var L_=[0,.5,0];function zu(){let i=P_(),t=Bu.map((o,a)=>{let l=[0,0,0];l[o.axis]=o.sign;let c=L_[o.axis]+o.sign*.5,h=i.map((_,v)=>v).filter(_=>Math.abs(i[_][o.axis]-c)<I_),f=Ie.scale(h.reduce((_,v)=>Ie.add(_,i[v]),[0,0,0]),1/4),u=[0,0,0];u[(o.axis+1)%3]=1;let m=Ie.cross(l,u);return h.sort((_,v)=>{let p=Ie.sub(i[_],f),d=Ie.sub(i[v],f);return Math.atan2(Ie.dot(p,m),Ie.dot(p,u))-Math.atan2(Ie.dot(d,m),Ie.dot(d,u))}),{id:o.id,number:o.number,place:o.place,index:a,normal:l,center:f,vertexIds:h,edgeIds:[],neighbors:[]}}),e=Object.fromEntries(t.map(o=>[o.id,o])),n=[];for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){let l=t[o],c=t[a],h=l.vertexIds.filter(I=>c.vertexIds.includes(I));if(h.length!==2)continue;let f=l.vertexIds.indexOf(h[0]),m=l.vertexIds.indexOf(h[1])===(f+1)%4?[h[0],h[1]]:[h[1],h[0]],_=i[m[0]],v=i[m[1]],p=Ie.norm(Ie.sub(v,_)),d={[l.id]:Ie.eq(Ie.cross(p,l.normal),c.normal)?1:-1,[c.id]:Ie.eq(Ie.cross(p,c.normal),l.normal)?1:-1},E={id:`E${n.length+1}`,number:n.length+1,index:n.length,faces:[l.id,c.id],vertexIds:m,ends:[_,v],dir:p,mid:Ie.scale(Ie.add(_,v),.5),openSign:d};n.push(E),l.edgeIds.push(E.id),c.edgeIds.push(E.id),l.neighbors.push(c.id),c.neighbors.push(l.id)}let s=Object.fromEntries(n.map(o=>[o.id,o])),r=Object.fromEntries(t.map(o=>[o.place,o]));for(let o of t)o.edgeIds=o.vertexIds.map((a,l)=>{let c=o.vertexIds[(l+1)%4];return o.edgeIds.find(h=>{let f=s[h];return f.vertexIds.includes(a)&&f.vertexIds.includes(c)})}),o.neighbors=o.edgeIds.map(a=>ci(s[a],o.id));for(let o of t)o.opposite=t.find(a=>a!==o&&!a.vertexIds.some(l=>o.vertexIds.includes(l))).id;return{vertices:i,faces:t,edges:n,faceById:e,edgeById:s,faceByPlace:r}}function ci(i,t){if(i.faces[0]===t)return i.faces[1];if(i.faces[1]===t)return i.faces[0];throw new Error(`Face ${t} is not on edge ${i.id}`)}function lr(i,t,e,n=null){let s=t instanceof Set?t:new Set(t),r=new Set([e]),o=[e];for(;o.length;){let a=o.pop();for(let l of i.faceById[a].edgeIds){if(l===n||!s.has(l))continue;let c=ci(i.edgeById[l],a);r.has(c)||(r.add(c),o.push(c))}}return r}function ku(i,t){return lr(i,t,i.faces[0].id).size===i.faces.length}function uc(i,t,e){let n=t instanceof Set?t:new Set(t);if(!n.has(e))return!1;let[s,r]=i.edgeById[e].faces;return!lr(i,n,s,e).has(r)}function Vu(i,t,e,n){if(!uc(i,t,e))return null;let s=lr(i,t,n,e);return new Set(i.faces.map(o=>o.id).filter(o=>!s.has(o)))}function Gu(i,t,e){let n=t instanceof Set?t:new Set(t),s={},r={[e]:0},o=[e];for(let a=0;a<o.length;a++){let l=o[a];for(let c of i.faceById[l].edgeIds){if(!n.has(c))continue;let h=ci(i.edgeById[c],l);h in r||(r[h]=r[l]+1,s[h]={face:l,edge:c},o.push(h))}}return{order:o,parent:s,depth:r}}function Hu(i,t){let e=t instanceof Set?t:new Set(t);return e.size===i.faces.length-1&&ku(i,e)}function Wu(i){let t=i.edges.map(r=>r.id),e=i.faces.length-1,n=[],s=[];return(function r(o){if(s.length===e){ku(i,s)&&n.push(new Set(s));return}for(let a=o;a<=t.length-(e-s.length);a++)s.push(t[a]),r(a+1),s.pop()})(0),n}function dc(i,t,e=Math.random){let n=new Set([t]),s=new Set,r=[t];for(;r.length;){let o=r[r.length-1],a=i.faceById[o].edgeIds.map(h=>[h,ci(i.edgeById[h],o)]).filter(([,h])=>!n.has(h));if(!a.length){r.pop();continue}let[l,c]=a[Math.floor(e()*a.length)];s.add(l),n.add(c),r.push(c)}return s}var D_=Math.PI/180;function fc(i,t,e){let n=new L(...i.ends[0]),s=new L(...i.dir),r=i.openSign[t],o=new At().makeRotationAxis(s,r*e*D_);return new At().makeTranslation(n.x,n.y,n.z).multiply(o).multiply(new At().makeTranslation(-n.x,-n.y,-n.z))}function yn(i,t,e,n,s=new At){let r=Gu(i,t,n),o={[n]:s.clone()};for(let a of r.order){if(a===n)continue;let{face:l,edge:c}=r.parent[a],h=fc(i.edgeById[c],a,e[c]??0);o[a]=o[l].clone().multiply(h)}return{poses:o,tree:r}}function fa(i,t,e,n=90){let s={};for(let r of t)s[r]=n;return yn(i,t,s,e).poses}var pa=class{constructor(t,e){this.id=t.id,this.number=t.number,this.place=t.place,this.index=t.index,this.vertexIds=[...t.vertexIds],this.restCorners=t.vertexIds.map(n=>new L(...e[n])),this.restCenter=new L(...t.center),this.restNormal=new L(...t.normal),this.edgeIds=[...t.edgeIds],this.neighbors=[...t.neighbors],this.opposite=t.opposite,this.pose=new At,this.parentId=null,this.hingeEdgeId=null,this.depth=0}get position(){return this.restCenter.clone().applyMatrix4(this.pose)}get normal(){return this.restNormal.clone().transformDirection(this.pose)}get corners(){return this.restCorners.map(t=>t.clone().applyMatrix4(this.pose))}};var ma=Object.freeze({JOINED:"joined",TOUCHING:"touching",APART:"apart"}),ga=class{constructor(t){this.id=t.id,this.number=t.number,this.index=t.index,this.faces=[...t.faces],this.vertexIds=[...t.vertexIds],this.restEnds=t.ends.map(e=>new L(...e)),this.restDir=new L(...t.dir),this.openSign={...t.openSign},this.cut=!1,this.hinge=!1,this.bridge=!1,this.angle=0,this.connection=ma.JOINED,this.worldEnds={[this.faces[0]]:this.restEnds.map(e=>e.clone()),[this.faces[1]]:this.restEnds.map(e=>e.clone())}}otherFace(t){return ci(this,t)}endsOn(t=this.faces[0]){return this.worldEnds[t]}positionOn(t=this.faces[0]){let[e,n]=this.endsOn(t);return e.clone().add(n).multiplyScalar(.5)}axisOn(t=this.faces[0]){let[e,n]=this.endsOn(t);return{point:e.clone(),direction:n.clone().sub(e).normalize()}}get position(){return this.positionOn()}get axis(){return this.axisOn()}updateConnection(){if(!this.cut){this.connection=ma.JOINED;return}let[t,e]=this.worldEnds[this.faces[0]],[n,s]=this.worldEnds[this.faces[1]],r=t.distanceTo(n)+e.distanceTo(s)<1e-4||t.distanceTo(s)+e.distanceTo(n)<1e-4;this.connection=r?ma.TOUCHING:ma.APART}};var _a=class{constructor({rootId:t=kn}={}){this.topo=zu(),this.rootId=t,this.rootPose=new At,this.faces=new Map(this.topo.faces.map(e=>[e.id,new pa(e,this.topo.vertices)])),this.edges=new Map(this.topo.edges.map(e=>[e.id,new ga(e)])),this.listeners=new Set,this.update()}face(t){return this.faces.get(t)}edge(t){return this.edges.get(t)}faceList(){return[...this.faces.values()]}edgeList(){return[...this.edges.values()]}joinedEdgeIds(){return new Set(this.edgeList().filter(t=>!t.cut).map(t=>t.id))}hingeEdgeIds(){return this.edgeList().filter(t=>t.hinge).map(t=>t.id)}cutCount(){return this.edgeList().filter(t=>t.cut).length}angles(){return Object.fromEntries(this.edgeList().map(t=>[t.id,t.angle]))}poses(){return Object.fromEntries(this.faceList().map(t=>[t.id,t.pose]))}setCut(t,e){let n=this.edge(t);n.cut=e,e&&(n.angle=0)}setAngle(t,e){this.edge(t).angle=e}setRoot(t){t!==this.rootId&&(this.rootPose=this.face(t).pose.clone(),this.rootId=t,this.update())}reset({rootId:t=kn}={}){this.rootId=t,this.rootPose=new At;for(let e of this.edges.values())e.cut=!1,e.angle=0;this.update()}setNet(t,e=90,{rootId:n=kn}={}){let s=new Set(t);this.rootId=n,this.rootPose=new At;for(let r of this.edges.values())r.cut=!s.has(r.id),r.angle=s.has(r.id)?e:0;this.update()}update(){let t=this.joinedEdgeIds(),{poses:e,tree:n}=yn(this.topo,t,this.angles(),this.rootId,this.rootPose);for(let r of this.faces.values()){e[r.id]&&r.pose.copy(e[r.id]);let o=n.parent[r.id];r.parentId=o?o.face:null,r.hingeEdgeId=o?o.edge:null,r.depth=n.depth[r.id]??-1}let s=new Set(Object.values(n.parent).map(r=>r.edge));for(let r of this.edges.values()){r.hinge=!r.cut&&s.has(r.id),r.bridge=uc(this.topo,t,r.id);for(let o of r.faces){let a=this.face(o).pose;r.worldEnds[o]=r.restEnds.map(l=>l.clone().applyMatrix4(a))}r.updateConnection()}for(let r of this.listeners)r(this)}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}snapshot(){return{rootId:this.rootId,rootPose:this.rootPose.toArray(),edges:this.edgeList().map(t=>({id:t.id,cut:t.cut,angle:t.angle}))}}restore(t){this.rootId=t.rootId,this.rootPose=new At().fromArray(t.rootPose);for(let e of t.edges){let n=this.edge(e.id);n.cut=e.cut,n.angle=e.angle}this.update()}};var N_=[([i,t])=>[i,t],([i,t])=>[-t,i],([i,t])=>[-i,-t],([i,t])=>[t,-i],([i,t])=>[-i,t],([i,t])=>[t,i],([i,t])=>[i,-t],([i,t])=>[-t,-i]];function ms(i,t){let e=i.faces[0];if(!t[e.id])return null;let n=(h,f)=>new L(...f).applyMatrix4(t[h.id]),s=n(e,e.center),r=new L(...e.normal).transformDirection(t[e.id]),o=n(e,i.vertices[e.vertexIds[1]]).sub(n(e,i.vertices[e.vertexIds[0]])).normalize(),a=new L().crossVectors(r,o),l={},c=new Set;for(let h of i.faces){if(!t[h.id])return null;let f=n(h,h.center).sub(s);if(Math.abs(f.dot(r))>1e-4)return null;let u=f.dot(o),m=f.dot(a),_=[Math.round(u),Math.round(m)];if(Math.abs(u-_[0])>1e-4||Math.abs(m-_[1])>1e-4)return null;let v=_.join(",");if(c.has(v))return null;c.add(v),l[h.id]=_}return l}function Xu(i){let t=Math.min(...i.map(n=>n[0])),e=Math.min(...i.map(n=>n[1]));return i.map(([n,s])=>[n-t,s-e]).sort((n,s)=>n[1]-s[1]||n[0]-s[0])}function gs(i){let t=null;for(let e of N_){let n=Xu(i.map(e)).map(s=>s.join(",")).join(";");(t===null||n<t)&&(t=n)}return t}function U_(i){return i.split(";").map(t=>t.split(",").map(Number))}function F_(i){let t=new Set(i.map(n=>n.join(","))),e=0;for(let[n,s]of i)for(let[r,o]of[[1,0],[0,1]]){if(t.has(`${n-r},${s-o}`))continue;let a=1;for(;t.has(`${n+r*a},${s+o*a}`);)a++;e=Math.max(e,a)}return e}function qu(i){let t=Math.max(...i.map(n=>n[0]))-Math.min(...i.map(n=>n[0])),e=Math.max(...i.map(n=>n[1]))-Math.min(...i.map(n=>n[1]));return Xu(e>t?i.map(([n,s])=>[s,n]):i.map(([n,s])=>[n,s]))}var pc=null;function mc(i,t=kn){if(pc)return pc;let e=new Map;for(let s of Wu(i)){let r=ms(i,fa(i,s,t));if(!r)throw new Error("A spanning tree did not flatten into a valid net");let o=gs(Object.values(r));e.has(o)||e.set(o,{key:o,treeCount:0,example:s}),e.get(o).treeCount++}let n=[...e.values()].map(s=>{let r=U_(s.key),o=Math.max(...r.map(l=>l[0]))+1,a=Math.max(...r.map(l=>l[1]))+1;return{...s,cells:r,run:F_(r),width:Math.max(o,a),height:Math.min(o,a)}});return n.sort((s,r)=>r.run-s.run||s.width-r.width||(s.key<r.key?-1:1)),n.forEach((s,r)=>{s.number=r+1}),pc=n,n}function Yu(i,t){let e=ms(i,t);if(!e)return null;let n=gs(Object.values(e));return mc(i).find(s=>s.key===n)??null}var Ti=1e-4;function gc(i){return{rootId:i.rootId,faces:i.faceList().map(t=>({id:t.id,corners:t.corners,normal:t.normal})),joined:[...i.joinedEdgeIds()].map(t=>{let e=i.edge(t);return{id:t,faces:[...e.faces],ends:e.faces.map(n=>e.endsOn(n))}})}}function _s(i){return i.reduce((t,e)=>t.add(e),new L).divideScalar(i.length)}function Zu(i,t){return i[0].distanceTo(t[0])<Ti&&i[1].distanceTo(t[1])<Ti||i[0].distanceTo(t[1])<Ti&&i[1].distanceTo(t[0])<Ti}function $u(i,t,e){let n=t.clone().sub(i).normalize();return new At().makeTranslation(i.x,i.y,i.z).multiply(new At().makeRotationAxis(n,e)).multiply(new At().makeTranslation(-i.x,-i.y,-i.z))}function _c(i){let t={sixFaces:!1,connected:!1,fiveFolds:!1,flat:!1,noOverlap:!1,closes:!1},e=new Map(i.faces.map(p=>[p.id,p]));t.sixFaces=e.size===6;let n=O_(i);t.connected=n.order.length===e.size,t.fiveFolds=t.connected&&i.joined.length===e.size-1,t.overlaps=[];let s=i.faces[0],r=s.normal.clone().normalize(),o=s.corners[0];t.flat=i.faces.every(p=>p.corners.every(d=>Math.abs(d.clone().sub(o).dot(r))<Ti))&&i.joined.every(p=>Zu(p.ends[0],p.ends[1]));let a=i.faces.map(p=>_s(p.corners));if(t.noOverlap=a.every((p,d)=>a.every((E,I)=>I<=d||p.distanceTo(E)>.5)),!(t.sixFaces&&t.connected&&t.fiveFolds&&t.flat&&t.noOverlap))return{ok:!1,...t};let l=r.clone().negate(),c={[i.rootId]:new At};for(let p of n.order.slice(1)){let{face:d,link:E}=n.parent[p],[I,M]=E.ends[E.faces.indexOf(d)],S=_s(e.get(p).corners),b=$u(I,M,Math.PI/2),A=S.clone().applyMatrix4(b).sub(I).dot(l)>0?1:-1;c[p]=c[d].clone().multiply($u(I,M,A*Math.PI/2))}let h=i.faces.map(p=>({id:p.id,corners:p.corners.map(d=>d.clone().applyMatrix4(c[p.id])),normal:p.normal.clone().transformDirection(c[p.id])})),f=h.reduce((p,d)=>p.add(_s(d.corners)),new L).divideScalar(6),u=h.every(p=>{let d=_s(p.corners).sub(f);return Math.abs(d.length()-.5)<Ti&&d.clone().normalize().dot(p.normal)>1-Ti}),m=h.every((p,d)=>h.every((E,I)=>I<=d||p.normal.dot(E.normal)<.5)),_=h.flatMap((p,d)=>p.corners.map((E,I)=>({face:d,seg:[E,p.corners[(I+1)%4]]}))),v=_.every(p=>_.filter(d=>d.face!==p.face&&Zu(p.seg,d.seg)).length===1);return t.closes=u&&m&&v,h.forEach((p,d)=>h.forEach((E,I)=>{I>d&&_s(p.corners).distanceTo(_s(E.corners))<.1&&t.overlaps.push([p.id,E.id])})),{ok:t.closes,...t}}function O_(i){let t=[i.rootId],e={};for(let n=0;n<t.length;n++){let s=t[n];for(let r of i.joined){let o=r.faces.indexOf(s);if(o<0)continue;let a=r.faces[1-o];a===i.rootId||a in e||(e[a]={face:s,link:r},t.push(a))}}return{order:t,parent:e}}function Ku(i){return _c(gc(i))}function xs(i,t=Math.random){for(let e=i.length-1;e>0;e--){let n=Math.floor(t()*(e+1));[i[e],i[n]]=[i[n],i[e]]}return i}var ve=90,hi=0,hS=Object.freeze({OK:"ok",IS_CUT:"isCut",STILL_HELD:"stillHeld"});function xc(i,t){return Vu(i.topo,i.joinedEdgeIds(),t,i.rootId)}var B_=-1e-4;function Ju(i,t,{openAll:e=!1}={}){let n={[t]:ve};if(e)for(let s of i.edgeList())s.hinge&&s.angle<ve&&(n[s.id]=ve);for(let s=0;s<i.faces.size;s++){let r={...i.angles(),...n},{poses:o,tree:a}=yn(i.topo,i.joinedEdgeIds(),r,i.rootId,i.rootPose),l=i.faceList().find(f=>f.restCorners.some(u=>u.clone().applyMatrix4(o[f.id]).y<B_));if(!l)break;let c=l.id,h=!1;for(;a.parent[c];){let f=a.parent[c].edge;if(f===t&&!e)break;if(r[f]<ve){n[f]=ve,h=!0;break}c=a.parent[c].face}if(!h)break}return n}function ju(i){let t=i.hingeEdgeIds();return t.length===i.faces.size-1&&t.every(e=>Math.abs(i.edge(e).angle-ve)<1e-6)}function yc(i){return i.faceList().filter(t=>t.edgeIds.filter(e=>!i.edge(e).cut).length===1)}function vc(i,t){let e=i.face(t).edgeIds.filter(n=>!i.edge(n).cut);return e.length===1?e[0]:null}function z_(i,t,e,n,s){return i.face(e).pose.clone().multiply(fc(i.topo.edgeById[n],t,s))}function ed(i,t,e){let n=new Set(i.hingeEdgeIds());return n.delete(t),n.add(e),n}function nd(i,t){let e=vc(i,t);return e?i.face(t).edgeIds.filter(n=>n!==e&&Hu(i.topo,ed(i,e,n))):[]}function Mc(i,t){return nd(i,t).map(e=>{let n=i.edge(e).otherFace(t),s=z_(i,t,n,e,ve),r=i.face(t);return{edgeId:e,toFace:n,pose:s,corners:r.restCorners.map(o=>o.clone().applyMatrix4(s))}})}function id(i,t,{maxWrong:e=2,rand:n=Math.random}={}){let s=i.face(t),r=Mc(i,t).map(S=>({id:`ok-${S.edgeId}`,correct:!0,...S})),o=i.faceList().filter(S=>S.id!==t),a=s.normal,l=o[0].position,c=o[0].corners[1].clone().sub(o[0].corners[0]).normalize(),h=new L().crossVectors(a,c),f=S=>{let b=S.clone().sub(l);return[Math.round(b.dot(c)),Math.round(b.dot(h))]},u=([S,b])=>l.clone().addScaledVector(c,S).addScaledVector(h,b),m=S=>S.join(","),_=new Map(o.map(S=>[m(f(S.position)),S])),v=new Set([..._.keys(),m(f(s.position)),...r.map(S=>m(f(S.corners.reduce((b,A)=>b.add(A),new L).divideScalar(4))))]),p=gc(i),d=vc(i,t),E=[],I=new Map;for(let S of o){let[b,A]=f(S.position);for(let x of[[b+1,A],[b-1,A],[b,A+1],[b,A-1]])v.has(m(x))||I.set(m(x),x)}let M=xs([...I.values()],n);for(let S of M){if(E.length>=e)break;let b=u(S),A=s.position,x=new At().makeTranslation(A.x,A.y,A.z).multiply(new At().makeRotationAxis(a,Math.floor(n()*4)*Math.PI/2)).multiply(new At().makeTranslation(-A.x,-A.y,-A.z)),w=b.clone().sub(A),P=new At().makeTranslation(w.x,w.y,w.z).multiply(x).multiply(s.pose),N=s.restCorners.map(B=>B.clone().applyMatrix4(P)),[O,R]=S,C=null;for(let B of[[O+1,R],[O-1,R],[O,R+1],[O,R-1]]){let W=_.get(m(B));if(!W)continue;let X=b.clone().add(W.position).multiplyScalar(.5),nt=new L().crossVectors(a,W.position.clone().sub(b)).normalize().multiplyScalar(.5),q=[X.clone().sub(nt),X.clone().add(nt)],j={rootId:W.id,faces:p.faces.map(Mt=>Mt.id===t?{...Mt,corners:N}:Mt),joined:[...p.joined.filter(Mt=>Mt.id!==d),{id:"new",faces:[t,W.id],ends:[q,q]}]},tt=_c(j);if(tt.ok){C=null;break}C=C??tt}C&&E.push({id:`no-${m(S)}`,correct:!1,corners:N,pose:P,overlaps:C.overlaps})}return xs([...r,...E],n)}var Qu=-1e-4;function Sc(i){return i.face(i.rootId).normal.y>0?180:0}function k_(i,t,e){let n=i.joinedEdgeIds(),s={[t]:null},r=[t];for(let a=0;a<r.length;a++){let l=r[a];if(l===e)break;for(let c of i.face(l).edgeIds){if(!n.has(c))continue;let h=ci(i.topo.edgeById[c],l);h in s||(s[h]={face:l,edge:c},r.push(h))}}let o=[];for(let a=e;s[a];a=s[a].face)o.unshift(s[a].edge);return o}function sd(i,t){let e=1/0;for(let n of i.faceList())for(let s of n.restCorners)e=Math.min(e,s.clone().applyMatrix4(t[n.id]).y);return e}function td(i,t,e,n,s,r=8){let o=i.face(e).pose,a=1/0;for(let l=1;l<=r;l++){let c=l/r,h={...n};for(let f of Object.keys(s))h[f]=n[f]+(s[f]-n[f])*c;a=Math.min(a,sd(i,yn(i.topo,t,h,e,o).poses))}return a}function bc(i,t,e){if(!nd(i,t).includes(e))return null;let n=vc(i,t),s=i.edge(n).otherFace(t),r=i.edge(e).otherFace(t),o=Sc(i),a=i.joinedEdgeIds(),l=k_(i,t,r),c=new Set(l),h=i.angles(),f=ed(i,n,e),u=new Set([...a].filter(v=>!c.has(v))),m=null;for(let v of i.faceList()){if(v.id===t)continue;let p=lr(i.topo,u,v.id).size,d=v.pose,E=Object.fromEntries(l.map(P=>[P,o]));for(let P=0;P<6;P++){let{poses:N,tree:O}=yn(i.topo,a,{...h,...E},v.id,d),R=i.faceList().find(W=>W.restCorners.some(X=>X.clone().applyMatrix4(N[W.id]).y<Qu));if(!R)break;let C=R.id,B=!1;for(;O.parent[C];){let W=O.parent[C].edge;if(!(W in E)){E[W]=o,B=!0;break}C=O.parent[C].face}if(!B)break}let I={...h,...E},M=td(i,a,v.id,h,E),S={...I,[e]:o},b=Object.fromEntries([...f].filter(P=>S[P]!==ve).map(P=>[P,ve])),A=td(i,f,v.id,S,b),x=Math.min(0,M,A),w=(x<Qu?x*100:0)+p+(v.id===i.rootId?.5:0)-Object.keys(E).length*.01;(!m||w>m.score)&&(m={score:w,rootId:v.id,fold:E,unfold:b,dip:x})}let _=Yu(i.topo,fa(i.topo,f,m.rootId));return{faceId:t,oldHinge:n,newHinge:e,fromFace:s,toFace:r,up:o,rootId:m.rootId,fold:m.fold,unfold:m.unfold,dip:m.dip,resultTree:f,resultNet:_}}function rd(i,t){i.setCut(t.oldHinge,!0),i.setCut(t.newHinge,!1),i.setAngle(t.newHinge,t.up),i.update()}function xa(i){let t=Sc(i);return Object.fromEntries(i.hingeEdgeIds().map(e=>[e,t]))}function od(i,t){let e=Sc(i),n=new Set(t);for(let s of i.edgeList())s.cut=!n.has(s.id),s.angle=n.has(s.id)?e:0;i.update()}function ad(i){return Object.fromEntries(i.hingeEdgeIds().filter(t=>i.edge(t).angle!==ve).map(t=>[t,ve]))}function ya(i,t){let e=new Set(t);return i.edgeList().map(n=>({id:n.id,cut:!e.has(n.id),angle:e.has(n.id)?ve:0}))}function ld(i){return i.filter(t=>!t.cut).map(t=>t.id)}function cd(i,t){return Object.fromEntries(t.filter(e=>!e.cut&&i.edge(e.id).angle!==e.angle).map(e=>[e.id,e.angle]))}function hd(i){let t=i.faceList().flatMap(o=>o.corners),e=t.reduce((o,a)=>o.min(a),new L(1/0,1/0,1/0)),n=t.reduce((o,a)=>o.max(a),new L(-1/0,-1/0,-1/0)),s=e.clone().add(n).multiplyScalar(.5),r=n.x-e.x>=n.z-e.z?new L(1,0,0):new L(0,0,1);return{point:s,dir:r}}function ud(i,t,e,n){let{point:s,dir:r}=e,a=new At().makeTranslation(s.x,s.y,s.z).multiply(new At().makeRotationAxis(r,Math.PI*n)).multiply(new At().makeTranslation(-s.x,-s.y,-s.z)).multiply(t),l=sd(i,yn(i.topo,i.joinedEdgeIds(),i.angles(),i.rootId,a).poses);return new At().makeTranslation(0,-l,0).multiply(a)}var Ma={linear:i=>i,inOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};function ui({from:i,to:t,duration:e=700,easing:n=Ma.inOutCubic,onUpdate:s}){return new Promise(r=>{if(e<=0){s(t,1),r();return}let o=performance.now(),a=l=>{let c=Math.min(1,(l-o)/e);s(i+(t-i)*n(c),c),c<1?requestAnimationFrame(a):r()};requestAnimationFrame(a)})}var Qe,cr,ys,va=class{constructor(t){Xn(this,Qe);this.cube=t,this.busy=!1,this.speed=1,this.msPer90=900}async run(t){if(this.busy)return!1;this.busy=!0;try{await t()}finally{this.busy=!1}return!0}turnMany(t){return this.run(()=>Wt(this,Qe,ys).call(this,t))}settleAll(t){let e=this.cube.edgeList().filter(n=>!n.cut&&n.angle!==t).map(n=>n.id);return this.turnMany(Object.fromEntries(e.map(n=>[n,t])))}playMove(t,{onSwap:e=()=>{}}={}){return this.run(async()=>{this.cube.setRoot(t.rootId),await Wt(this,Qe,ys).call(this,t.fold),await Wt(this,Qe,cr).call(this,350),rd(this.cube,t),e(),await Wt(this,Qe,cr).call(this,450),await Wt(this,Qe,ys).call(this,t.unfold)})}changePaper(t,{onRecut:e=()=>{}}={}){return this.run(async()=>{await Wt(this,Qe,ys).call(this,xa(this.cube)),await Wt(this,Qe,cr).call(this,300),od(this.cube,ld(t)),e(),await Wt(this,Qe,cr).call(this,400),await Wt(this,Qe,ys).call(this,cd(this.cube,t))})}changeNet(t,e){return this.changePaper(ya(this.cube,t),e)}flip(){return this.run(async()=>{let t=this.cube,e=t.rootPose.clone(),n=hd(t);await ui({from:0,to:1,duration:this.msPer90*2.2/this.speed,onUpdate:s=>{t.rootPose=ud(t,e,n,s),t.update()}})})}};Qe=new WeakSet,cr=function(t){return new Promise(e=>setTimeout(e,t/this.speed))},ys=function(t){let e=Object.keys(t),n=Object.fromEntries(e.map(r=>[r,this.cube.edge(r).angle])),s=Math.max(0,...e.map(r=>Math.abs(t[r]-n[r])));return s===0?Promise.resolve():ui({from:0,to:1,duration:this.msPer90*1.3*s/90/this.speed,onUpdate:r=>{for(let o of e)this.cube.setAngle(o,n[o]+(t[o]-n[o])*r);this.cube.update()}})};var Sa=class{constructor(){this.items=[],this.pending=null}ask({activity:t,question:e,expected:n,state:s=null,options:r=null,meta:o={}}){return this.pending={activity:t,question:e,options:r,meta:o,state:s,expected:n,answer:null,correct:null,askedAt:Date.now()},this.pending}clear(){this.items=[],this.pending=null}answer(t){return this.pending?(this.pending.answer=t,this.pending):null}check(t=(e,n)=>e===n){let e=this.pending;return e?(typeof e.expected=="function"&&(e.expected=e.expected()),e.correct=e.answer!==null&&t(e.answer,e.expected),this.items.push(e),this.pending=null,e):null}};var dd={type:"change"},Ec={type:"start"},pd={type:"end"},ba=new jn,fd=new $e,V_=Math.cos(70*sr.DEG2RAD),Me=new L,qe=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wc=1e-6,wa=class extends Zs{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ke,this._lastTargetPosition=new L,this._quat=new Ke().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ss,this._sphericalDelta=new ss,this._scale=1,this._panOffset=new L,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new L,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=H_.bind(this),this._onPointerDown=G_.bind(this),this._onPointerUp=W_.bind(this),this._onContextMenu=J_.bind(this),this._onMouseWheel=Y_.bind(this),this._onKeyDown=Z_.bind(this),this._onTouchStart=$_.bind(this),this._onTouchMove=K_.bind(this),this._onMouseDown=X_.bind(this),this._onMouseMove=q_.bind(this),this._interceptControlDown=j_.bind(this),this._interceptControlUp=Q_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Qt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dd),this.update(),this.state=Qt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Me.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ba.origin.copy(this.object.position),ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ba.direction))<V_?this.object.lookAt(this.target):(fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ba.intersectPlane(fd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wc||this._lastTargetPosition.distanceToSquared(this.target)>wc?(this.dispatchEvent(dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function G_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function H_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function W_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pd),this.state=Qt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function X_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Ec)}function q_(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Y_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pd))}function Z_(i){this.enabled!==!1&&this._handleKeyDown(i)}function $_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Ec)}function K_(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function J_(i){this.enabled!==!1&&i.preventDefault()}function j_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Q_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var tx=new L(3.2,3.9,5.5),md=new L(0,.3,.3),gd={touch:22,pen:16,mouse:12};function _d(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}var ln,xd,Tc,Ac,yd,Ea=class{constructor(t,e){Xn(this,ln);this.container=t,this.scene=new Ds,this.scene.background=new Lt(e.workspace),this.renderer=new ca({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.setAttribute("role","img"),t.prepend(this.renderer.domElement),this.focus=null,this.focusRadius=1,this.zoomTo=null,this.inset={top:0,bottom:0},this.insetTarget={top:0,bottom:0},this.camera=new Ue(38,1,.1,100),this.controls=new wa(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI*.495,this.controls.minDistance=2.5,this.controls.maxDistance=20,this.resetView(),this.scene.add(new Ws(16777215,13948112,2.3));let n=new qs(16777215,.85);n.position.set(3,8,5),this.scene.add(n);let s=new Ee(new vi(14,14),new Tn({color:e.floor,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=-.03,s.renderOrder=-2,this.scene.add(s);let r=new Ys(14,14,e.grid,e.grid);r.position.y=-.02,r.material.depthWrite=!1,r.renderOrder=-1,this.scene.add(r),this.raycaster=new is,this.edgeRaycaster=new is,this.cubeView=null,this.onFrame=new Set,this.dirty=!0,new ResizeObserver(()=>this.resize()).observe(t),window.addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.setAnimationLoop(()=>{Wt(this,ln,xd).call(this),Wt(this,ln,yd).call(this),this.controls.update()&&(this.dirty=!0);for(let o of this.onFrame)o()&&(this.dirty=!0);this.dirty&&(this.dirty=!1,this.renderer.render(this.scene,this.camera))})}follow(t,e=this.focusRadius){if(this.focus=t.clone(),e>this.focusRadius+.05){this.focusRadius=e;let n=Wt(this,ln,Ac).call(this);this.camera.position.distanceTo(this.controls.target)<n&&(this.zoomTo=n)}this.focusRadius=e}centreNow(){if(!this.focus)return;let t=this.focus.clone().sub(this.controls.target);if(this.controls.target.add(t),this.camera.position.add(t),this.zoomTo!==null){let e=this.camera.position.clone().sub(this.controls.target);this.camera.position.copy(this.controls.target).addScaledVector(e.normalize(),Math.max(e.length(),this.zoomTo)),this.zoomTo=null}this.controls.update(),this.invalidate()}setInsets({top:t,bottom:e}){this.insetTarget={top:t,bottom:e}}invalidate(){this.dirty=!0}resetView(){let t=this.focus??md,e=tx.clone().sub(md);e.setLength(Math.max(e.length(),Wt(this,ln,Ac).call(this))),this.zoomTo=null,this.controls.target.copy(t),this.camera.position.copy(t).add(e),this.controls.update(),this.invalidate()}setCameraEnabled(t){this.controls.enabled=t}resize(){let t=this.container.clientWidth,e=this.container.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),Wt(this,ln,Tc).call(this))}toScreen(t){let e=t.clone().project(this.camera);return{x:(e.x+1)/2*this.container.clientWidth,y:(1-e.y)/2*this.container.clientHeight}}pick(t,e,n="mouse"){let s=this.cubeView;if(!s)return null;let r=this.renderer.domElement.getBoundingClientRect(),o=new It((t-r.left)/r.width*2-1,-((e-r.top)/r.height)*2+1);this.raycaster.setFromCamera(o,this.camera);let a=this.raycaster.intersectObjects(s.faceMeshes,!1)[0],l=this.raycaster.intersectObjects(s.ghostMeshes(),!1).find(f=>f.point.y>-.001&&(!a||f.distance<=a.distance+.001));if(l)return{kind:"ghost",id:l.object.userData.id};let c=a?a.object.userData.faceId:null,h=s.pickEdge({camera:this.camera,rect:r,raycaster:this.edgeRaycaster,x:t,y:e,thresholdPx:gd[n]??gd.mouse});return h?{...h,under:c}:c?{kind:"face",faceId:c}:null}};ln=new WeakSet,xd=function(){let t=this.insetTarget.top-this.inset.top,e=this.insetTarget.bottom-this.inset.bottom;Math.abs(t)<.5&&Math.abs(e)<.5||(this.inset.top+=t*.15,this.inset.bottom+=e*.15,Wt(this,ln,Tc).call(this))},Tc=function(){let t=this.container.clientWidth,e=this.container.clientHeight;if(!t||!e)return;let n=this.inset.bottom-this.inset.top,s=e+Math.abs(n);this.camera.fov=t<e?50:36,this.camera.aspect=t/s,this.camera.setViewOffset(t,s,0,Math.max(n,0),t,e),this.invalidate()},Ac=function(){let t=this.container.clientWidth||1,e=this.container.clientHeight||1,n=e+Math.abs(this.inset.bottom-this.inset.top),s=Math.max(e-this.inset.top-this.inset.bottom,e*.3),r=Math.tan(sr.degToRad(this.camera.fov)/2),o=Math.min(Math.atan(r*s/n),Math.atan(r*t/n));return this.focusRadius/Math.sin(o)*1.12},yd=function(){if(!this.focus)return;let t=this.focus.clone().sub(this.controls.target);if(t.lengthSq()>=1e-8&&(t.lengthSq()>1e-6&&t.multiplyScalar(.12),this.controls.target.add(t),this.camera.position.add(t),this.dirty=!0),this.zoomTo!==null){let e=this.camera.position.clone().sub(this.controls.target),n=this.zoomTo-e.length();if(n<.01){this.zoomTo=null;return}this.camera.position.addScaledVector(e.normalize(),n*.12),this.dirty=!0}};var ex=.006;function vd(i,t=1){let e=i.reduce((o,a)=>o.add(a),new L).divideScalar(i.length),n=i[1].clone().sub(i[0]).cross(i[2].clone().sub(i[1])).normalize(),s=n.y>.5?n.clone():n.clone().negate();return{points:i.map(o=>o.clone().sub(e).multiplyScalar(t).add(e).addScaledVector(s,ex)),normal:n,lift:s,mirrored:n.y<.5}}var Md=.014,nx=.05,Cc=7,ix=.9,Sd="rgba(30,32,36,0.92)";function vs(i,t,e,n="#ffffff"){let r=document.createElement("canvas");r.width=r.height=256;let o=r.getContext("2d");o.fillStyle=n,o.fillRect(0,0,256,256),i&&(e&&(o.translate(256,0),o.scale(-1,1)),o.fillStyle=t,o.font='500 104px system-ui, -apple-system, "Segoe UI", sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText(i,256/2,256/2+4),o.fillRect(256/2-22,256/2+56,44,6));let a=new zs(r);return a.colorSpace=ke,a.anisotropy=8,a}function bd(i,t){let e=new Fe;return e.setAttribute("position",new ue(i.flatMap(n=>n.toArray()),3)),e.setAttribute("normal",new ue([0,1,2,3].flatMap(()=>t.toArray()),3)),e.setAttribute("uv",new ue([0,0,1,0,1,1,0,1],2)),e.setIndex([0,1,2,0,2,3]),e}function Rc(i,t,e,n){let s=new Vs(e,e,i.distanceTo(t),10,1,!1),r=new Ee(s,n);return r.position.copy(i).add(t).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new L(0,1,0),t.clone().sub(i).normalize()),r}var Ta=class{constructor(t,e,n){this.cube=t,this.theme=n,this.root=new sn,e.add(this.root),this.faceGroups=new Map,this.faceMeshes=[],this.edgeRods=[],this.edgeStyler=()=>({color:n.edge,scale:1}),this.faceStyler=()=>({}),this.hoverEdge=null,this.labelsVisible=!0,this.pulse=new Set,this.flash=new Set,this.onDirty=()=>{},this.reducedMotion=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this.colors={selected:new Lt(n.selected),pulse:new Lt(n.pulse),outside:new Lt(n.faceOutside),inside:new Lt(n.faceInside)},this.ghosts=new sn,this.root.add(this.ghosts),this.build(),this.sync(),t.onChange(()=>this.sync())}build(){let t=this.theme;for(let e of this.cube.faceList()){let n=new sn;n.matrixAutoUpdate=!1;let s=String(e.number),r=bd(e.restCorners,e.restNormal),o={roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1},a={outside:[vs(s,t.faceLabel,!1),vs("",t.faceLabel,!1)],inside:[vs(s,t.faceLabel,!0),vs("",t.faceLabel,!0)]};for(let c of["outside","inside"]){let h=new Ee(r,new es({...o,side:c==="outside"?An:Re,map:a[c][0]}));h.userData={kind:"face",faceId:e.id,side:c,textures:a[c],baseColor:new Lt},n.add(h),this.faceMeshes.push(h)}let l=new Tn({color:t.edgeHalo,transparent:!0,opacity:.45,depthWrite:!1});for(let c of e.edgeIds){let[h,f]=this.cube.edge(c).restEnds,u=new es({color:t.edge,roughness:.7}),m=Rc(h,f,Md,u),_=Rc(h,f,nx,l);_.visible=!1,_.renderOrder=2;let v=new sn;for(let p=0;p<Cc;p++){let d=(p+.2)/Cc,E=(p+.8)/Cc;v.add(Rc(h.clone().lerp(f,d),h.clone().lerp(f,E),Md*.85,u))}v.visible=!1,n.add(m,_,v),this.edgeRods.push({edgeId:c,faceId:e.id,mesh:m,halo:_,dashes:v})}this.root.add(n),this.faceGroups.set(e.id,n)}}setEdgeStyler(t){this.edgeStyler=t,this.sync()}setFaceStyler(t){this.faceStyler=t,this.sync()}setHover(t){this.hoverEdge=t,this.sync()}setPulse(t){this.pulse=new Set(t),this.sync()}flashFaces(t,e=1400){this.flash=new Set(t),this.sync(),clearTimeout(this.flashTimer),this.flashTimer=setTimeout(()=>{this.flash=new Set,this.sync()},e)}tick(t){if(!this.pulse.size)return!1;let e=this.reducedMotion?.6:.5-.5*Math.cos(t/1400*Math.PI*2);for(let n of this.faceMeshes)this.pulse.has(n.userData.faceId)&&n.material.color.copy(n.userData.baseColor).lerp(this.colors.pulse,.9*e);return!this.reducedMotion}setLabelsVisible(t){this.labelsVisible=t;for(let e of this.faceMeshes)e.material.map=e.userData.textures[t?0:1],e.material.needsUpdate=!0;for(let e of this.ghosts.children)e.material.map?.dispose(),e.material.map=vs(t&&e.userData.number?String(e.userData.number):"",Sd,e.userData.mirrored),e.material.needsUpdate=!0;this.onDirty()}setGhosts(t=[]){let e=this.theme;for(let n of[...this.ghosts.children]){n.geometry.dispose(),n.material.map?.dispose(),n.material.dispose();let s=n.children[0];s.geometry.dispose(),s.material.dispose(),this.ghosts.remove(n)}for(let n of t)for(let s of n.squares){let{points:r,normal:o,lift:a,mirrored:l}=vd(s.corners,ix),c=this.labelsVisible&&s.number?String(s.number):"",h=new Ee(bd(r,o),new Tn({color:e.candidate,map:vs(c,Sd,l),transparent:!0,opacity:0,side:on,depthWrite:!1})),f=new Os(new Fe().setFromPoints(r.map(u=>u.clone().addScaledVector(a,.001))),new yi({color:e.candidate,transparent:!0,opacity:0,depthWrite:!1}));h.add(f),h.userData={kind:"ghost",id:n.id,number:s.number,mirrored:l},h.renderOrder=1,this.ghosts.add(h)}this.onDirty()}fadeGhosts(t,e,n,s,r=null){return r&&t.forEach(o=>{o.material.color.set(r),o.children[0].material.color.set(r)}),ui({from:e,to:n,duration:s,onUpdate:o=>{t.forEach(a=>{a.material.opacity=o,a.children[0].material.opacity=Math.min(1,o*2.4)}),this.onDirty()}})}ghostMeshes(t=null){return this.ghosts.children.filter(e=>e.visible&&e.userData.id!==null&&(t===null||e.userData.id===t))}sync(){for(let t of this.cube.faceList()){let e=this.faceGroups.get(t.id);e.matrix.copy(t.pose),e.matrixWorldNeedsUpdate=!0}for(let t of this.faceMeshes){let e=this.cube.face(t.userData.faceId),n=this.faceStyler(e);t.material.color.copy(t.userData.side==="outside"?this.colors.outside:this.colors.inside),n.selected&&t.material.color.lerp(this.colors.selected,.25),this.flash.has(e.id)&&t.material.color.lerp(this.colors.selected,.45),t.userData.baseColor.copy(t.material.color)}for(let t of this.edgeRods){let e=this.cube.edge(t.edgeId),n=this.edgeStyler(e,t.faceId);t.mesh.material.color.set(n.color);let s=n.scale??1;t.mesh.scale.set(s,1,s),t.mesh.visible=!n.dashed,t.dashes.visible=!!n.dashed,t.halo.visible=e.id===this.hoverEdge||!!n.halo}this.onDirty()}pickEdge({camera:t,rect:e,raycaster:n,x:s,y:r,thresholdPx:o}){let a=c=>{let h=c.clone().project(t);return{x:e.left+(h.x+1)/2*e.width,y:e.top+(1-h.y)/2*e.height,z:h.z}},l=null;for(let c of this.edgeRods){let h=this.cube.edge(c.edgeId),[f,u]=h.endsOn(c.faceId),m=a(f),_=a(u);if(m.z>1||_.z>1)continue;let v=_.x-m.x,p=_.y-m.y,d=v*v+p*p||1,E=Math.min(1,Math.max(0,((s-m.x)*v+(r-m.y)*p)/d)),I=Math.hypot(s-(m.x+v*E),r-(m.y+p*E));if(I>o||l&&I>=l.d)continue;let M=f.clone().lerp(u,E),S=t.position.distanceTo(M);n.set(t.position,M.clone().sub(t.position).normalize());let b=h.connection==="apart"?[c.faceId]:h.faces,A=n.intersectObjects(this.faceMeshes,!1).find(x=>!b.includes(x.object.userData.faceId));A&&A.distance<S-.02||(l={d:I,edgeId:h.id,faceId:c.faceId})}return l?{kind:"edge",edgeId:l.edgeId,faceId:l.faceId,d:l.d}:null}};var sx=["workspace","floor","face-outside","face-inside","face-label","edge","edge-fold","edge-cut","edge-net","edge-halo","selected","pulse","candidate","candidate-alpha","grid"];function wd(){let i=getComputedStyle(document.documentElement),t={};for(let e of sx){let n=e.replace(/-(\w)/g,(s,r)=>r.toUpperCase());t[n]=i.getPropertyValue(`--${e}`).trim()}return t.candidateAlpha=Number(t.candidateAlpha)||.28,t}var Te,Ai,Ed,Td,Ad,Ic,Aa=class{constructor(t){Xn(this,Te);this.sv=t,this.onHover=()=>{},this.onTap=()=>{},this.edgesEnabled=!0,this.pointers=new Set,this.multi=!1,this.press=null,this.hoverId=null;let e=t.renderer.domElement;e.addEventListener("pointerdown",n=>Wt(this,Te,Ed).call(this,n)),e.addEventListener("pointermove",n=>Wt(this,Te,Td).call(this,n)),e.addEventListener("pointerup",n=>Wt(this,Te,Ad).call(this,n)),e.addEventListener("pointercancel",n=>Wt(this,Te,Ic).call(this,n)),e.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&Wt(this,Te,Ai).call(this,null)})}};Te=new WeakSet,Ai=function(t){this.edgesEnabled||(t=null),t!==this.hoverId&&(this.hoverId=t,this.onHover(t))},Ed=function(t){if(!(t.pointerType==="mouse"&&t.button!==0)){if(this.pointers.add(t.pointerId),this.pointers.size>1){this.multi=!0,this.press=null,Wt(this,Te,Ai).call(this,null);return}if(this.press={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now()},t.pointerType!=="mouse"){let e=this.sv.pick(t.clientX,t.clientY,t.pointerType);Wt(this,Te,Ai).call(this,e?.kind==="edge"?e.edgeId:null)}}},Td=function(t){let e=this.press;if(e&&e.id===t.pointerId){Math.hypot(t.clientX-e.x,t.clientY-e.y)>10&&(this.press=null,t.pointerType!=="mouse"&&Wt(this,Te,Ai).call(this,null));return}if(t.pointerType==="mouse"&&t.buttons===0){let n=this.sv.pick(t.clientX,t.clientY,"mouse");Wt(this,Te,Ai).call(this,n?.kind==="edge"?n.edgeId:null);let s=n&&(n.kind!=="edge"||this.edgesEnabled);this.sv.renderer.domElement.style.cursor=s?"pointer":""}},Ad=function(t){let e=this.press,n=e&&e.id===t.pointerId&&!this.multi&&performance.now()-e.t<600;Wt(this,Te,Ic).call(this,t),n&&this.onTap(this.sv.pick(t.clientX,t.clientY,t.pointerType))},Ic=function(t){this.pointers.delete(t.pointerId),this.press?.id===t.pointerId&&(this.press=null),this.pointers.size===0&&(this.multi=!1),t.pointerType!=="mouse"&&Wt(this,Te,Ai).call(this,null)};var Ca=class{constructor(t,e){this.sv=e,this.el=document.createElement("div"),this.el.className="edge-actions",this.el.setAttribute("role","toolbar"),this.el.hidden=!0,t.appendChild(this.el),this.edge=null,this.faceId=null,this.actions=[],this.el.addEventListener("click",n=>{let s=n.target.closest("[data-id]");!s||!this.edge||(n.stopPropagation(),this.actions.find(r=>r.id===s.dataset.id)?.onClick())}),e.onFrame.add(()=>(this.place(),!1))}show(t,e,n){this.edge=t,this.faceId=e,this.actions=n,this.render(),this.el.hidden=!1,requestAnimationFrame(()=>this.el.classList.add("visible")),this.place()}render(){this.el.innerHTML=this.actions.map(t=>`
      <button class="action" data-id="${t.id}" title="${fe(t.labelKey)}" aria-label="${fe(t.labelKey)}">
        ${t.icon}<span>${fe(t.labelKey)}</span>
      </button>`).join("")}hide(){this.edge=null,this.actions=[],this.el.classList.remove("visible"),this.el.hidden=!0}anchor(){let t=this.el.getBoundingClientRect(),e=this.sv.container.getBoundingClientRect();return{x:t.left-e.left+t.width/2,y:t.top-e.top+t.height/2}}place(){if(!this.edge)return;let[t,e]=this.edge.endsOn(this.faceId).map(f=>this.sv.toScreen(f)),n={x:(t.x+e.x)/2,y:(t.y+e.y)/2},s=-(e.y-t.y),r=e.x-t.x,o=Math.hypot(s,r)||1;s/=o,r/=o,r>0&&(s=-s,r=-r);let a=this.sv.container.clientWidth,l=this.sv.container.clientHeight,c=Math.min(a-60,Math.max(60,n.x+s*50)),h=Math.min(l-40,Math.max(40,n.y+r*50));this.el.style.transform=`translate(${c}px, ${h}px) translate(-50%, -50%)`}};var tn=(i,t="")=>`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${t}>${i}</svg>`,Ge={globe:tn('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3Z"/>'),eye:tn('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>'),eyeOff:tn('<path d="M4 4l16 16"/><path d="M9.9 5.8A9.7 9.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-2.9 3.6"/><path d="M6.4 7.4C3.9 9.2 2.5 12 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.2-1"/><path d="M10 10a2.8 2.8 0 0 0 4 4"/>'),cube:tn('<path d="M12 3.5 19.5 7.7v8.6L12 20.5l-7.5-4.2V7.7Z"/><path d="M12 12 19.5 7.7M12 12v8.5M12 12 4.5 7.7"/>'),box:tn('<path d="M4.5 10.2v6.6L12 20.6l7.5-3.8v-6.6"/><path d="M4.5 10.2 12 14l7.5-3.8L12 6.5Z"/><path d="M12 14v6.6"/><path d="M4.5 10.2 2.6 6.4 10.1 2.7 12 6.5"/><path d="M12 6.5 13.9 2.7 21.4 6.4 19.5 10.2"/>'),net:tn('<path d="M9 3.5h6V9h5.5v6H15v5.5H9V15H3.5V9H9Z"/><path d="M9 9h6v6H9Z"/>'),flip:tn('<path d="M12 3v18" stroke-dasharray="2.2 2.6"/><path d="M9 7.5 3.5 17H9Z"/><path d="M15 7.5 20.5 17H15Z" stroke-dasharray="2 2"/>'),undo:tn('<path d="M9 14 4.5 9.5 9 5"/><path d="M4.5 9.5h9.5a5.5 5.5 0 0 1 0 11H11"/>'),restart:tn('<path d="M20 11.5A8 8 0 0 0 5.6 6.8L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 12.5a8 8 0 0 0 14.4 4.7l1.6-1.7"/><path d="M20 20v-4.5h-4.5"/>'),trash:tn('<path d="M4.5 7h15"/><path d="M9.5 7V4.5h5V7"/><path d="M6.5 7l.9 12.5h9.2L17.5 7"/><path d="M10 10.5v5.5M14 10.5v5.5"/>'),unfold:tn('<rect x="4" y="13" width="7" height="7" rx="0.5"/><path d="M11 13 18 6.5"/><path d="M13 13h7v7h-7"/><path d="M15 6h3.2v3.2" />'),fold:tn('<rect x="4" y="13" width="7" height="7" rx="0.5"/><path d="M11 13v-7h7"/><path d="M13 13h7v7h-7" stroke-dasharray="2 2"/>')},Cd=`
<svg class="scissors-svg" viewBox="0 0 48 48" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
  <g class="blade blade-a">
    <circle cx="9" cy="18" r="5"/>
    <path d="M13.6 19.9 42 31.2"/>
  </g>
  <g class="blade blade-b">
    <circle cx="9" cy="30" r="5"/>
    <path d="M13.6 28.1 42 16.8"/>
  </g>
  <circle cx="24" cy="24" r="1.4" fill="currentColor" stroke="none"/>
</svg>`,Rd=tn('<circle cx="6" cy="7.5" r="2.6"/><circle cx="6" cy="16.5" r="2.6"/><path d="M8.2 9 20 16.5"/><path d="M8.2 15 20 7.5"/>');var Vn,Ra,Pc,Ia=class{constructor(t){Xn(this,Vn);this.layer=t,this.speed=1,this.el=document.createElement("div"),this.el.className="scissors",this.el.innerHTML=Cd,this.trail=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.trail.setAttribute("class","cut-trail"),this.trail.innerHTML="<line/>",t.append(this.trail,this.el)}async cut({from:t,ends:e,stopAt:n=1}){let[s,r]=e(),o=Math.hypot(r.x-t.x,r.y-t.y)<Math.hypot(s.x-t.x,s.y-t.y),a=()=>{let h=e();return o?[h[1],h[0]]:h};[s,r]=a();let l=()=>{let[h,f]=a();return Math.atan2(f.y-h.y,f.x-h.x)*180/Math.PI};this.el.classList.add("visible"),this.el.classList.remove("snipping","refuse"),this.trail.classList.add("visible"),Wt(this,Vn,Pc).call(this,s,s),await ui({from:0,to:1,duration:220/this.speed,easing:Ma.inOutCubic,onUpdate:h=>Wt(this,Vn,Ra).call(this,t.x,t.y,0,.6+.4*h)});let c=l();await ui({from:0,to:1,duration:480/this.speed,onUpdate:h=>{let[f]=a();Wt(this,Vn,Ra).call(this,t.x+(f.x-t.x)*h,t.y+(f.y-t.y)*h,c*h)}}),this.el.classList.add("snipping"),await ui({from:0,to:n,duration:1100*n/this.speed,easing:Ma.linear,onUpdate:h=>{let[f,u]=a(),m=f.x+(u.x-f.x)*h,_=f.y+(u.y-f.y)*h;Wt(this,Vn,Ra).call(this,m,_,l()),Wt(this,Vn,Pc).call(this,f,{x:m,y:_})}}),this.el.classList.remove("snipping"),n<1&&(this.el.classList.add("refuse"),await new Promise(h=>setTimeout(h,520/this.speed))),this.el.classList.remove("visible","refuse"),this.trail.classList.remove("visible"),await new Promise(h=>setTimeout(h,180))}};Vn=new WeakSet,Ra=function(t,e,n,s=1){this.el.style.transform=`translate(${t}px, ${e}px) translate(-50%, -50%) rotate(${n}deg) scale(${s})`},Pc=function(t,e){let n=this.trail.querySelector("line");n.setAttribute("x1",t.x),n.setAttribute("y1",t.y),n.setAttribute("x2",e.x),n.setAttribute("y2",e.y)};var Pa=class{constructor(t){this.el=t,this.timer=null,this.entries=null}show(t,e={},n={}){this.showAll([[t,e]],n)}showAll(t,{ms:e=4200,tone:n="neutral"}={}){clearTimeout(this.timer),this.entries=t.map(([s,r={}])=>[s,r]),this.render(),this.el.dataset.tone=n,this.el.classList.add("visible"),e>0&&(this.timer=setTimeout(()=>this.hide(),e))}render(){this.entries&&(this.el.textContent=this.entries.map(([t,e])=>fe(t,e)).join(" "))}hide(){clearTimeout(this.timer),this.entries=null,this.el.classList.remove("visible")}};var La=class{constructor(t,e){this.el=t,this.catalog=e.map((s,r)=>({key:s.key,number:r+1,cells:qu(s.cells)})),this.frame={w:Math.max(...this.catalog.map(s=>Math.max(...s.cells.map(r=>r[0]))+1)),h:Math.max(...this.catalog.map(s=>Math.max(...s.cells.map(r=>r[1]))+1))},this.made=new Map,this.showAll=!1,this.interactive=!1,this.currentKey=null,this.version=0,this.onPick=()=>{},this.onErase=()=>{},this.onHeight=()=>{},new ResizeObserver(()=>this.reportHeight()).observe(t),t.addEventListener("click",s=>{if(s.target.closest("[data-erase]")){this.onErase();return}let r=s.target.closest("[data-key]");if(!r||!this.interactive)return;let o=r.dataset.key;this.onPick({key:o,made:this.made.has(o),tree:this.made.get(o)??null})})}get total(){return this.catalog.length}get count(){return this.made.size}add(t,e){let n=this.made.has(t)?"same":"new";return n==="new"&&(this.made.set(t,[...e]),this.version++),this.setCurrent(t),this.flash(t),n}has(t){return this.made.has(t)}clear(){this.made.clear(),this.version++,this.currentKey=null,this.render()}latestTree(){let t=[...this.made.values()];return t.length?t[t.length-1]:null}celebration(){return this.count===this.total?["net.allFound",{total:this.total}]:["net.found",{count:this.count,total:this.total}]}setCurrent(t){this.currentKey=t,this.render()}setMode({showAll:t,interactive:e}){this.showAll=t,this.interactive=e,this.render()}flash(t){let e=this.el.querySelector(`[data-key="${t}"]`);e&&(e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash"))}thumb(t){let n=Math.max(...t.map(l=>l[0]))+1,s=Math.max(...t.map(l=>l[1]))+1,r=(this.frame.w-n)/2*10+1,o=(this.frame.h-s)/2*10+1,a=t.map(([l,c])=>`<rect x="${l*10+r}" y="${c*10+o}" width="10" height="10"/>`).join("");return`<svg viewBox="0 0 ${this.frame.w*10+2} ${this.frame.h*10+2}" aria-hidden="true">${a}</svg>`}reportHeight(){let t=this.el.parentElement;if(!t)return;let e=this.el.hidden?0:Math.ceil(this.el.getBoundingClientRect().height);t.style.setProperty("--tray-h",`${e}px`),this.onHeight(e)}render(){let t=new Map(this.catalog.map(n=>[n.key,n])),e=this.showAll?this.catalog:[...this.made.keys()].map(n=>t.get(n));this.el.hidden=e.length===0,this.el.classList.toggle("interactive",this.interactive),this.el.classList.toggle("all",this.showAll),this.el.innerHTML=`
      <div class="tray-head">
        <span class="tray-title">${fe("tray.title")}</span>
        <span class="tray-count">${this.count} / ${this.total}</span>
        ${this.showAll?`<span class="tray-goal">${fe("tray.goal")}</span>`:""}
        ${this.count?`<button class="tray-erase" data-erase type="button">${Ge.trash}<span>${fe("tray.erase")}</span></button>`:""}
      </div>
      <div class="tray-items">${e.map((n,s)=>{let r=this.made.has(n.key),o=fe(r?"tray.itemMade":"tray.itemMissing",{n:this.showAll?n.number:s+1}),a=`net-item ${r?"made":"missing"}${n.key===this.currentKey?" current":""}`,l=this.interactive&&r;return`<button class="${a}" data-key="${n.key}" aria-label="${o}" title="${o}"
          ${l?"":'tabindex="-1" aria-disabled="true"'}>${this.thumb(n.cells)}</button>`}).join("")}
      </div>`,this.reportHeight()}};var Ci=Object.freeze({OK:"ok",ALREADY_CUT:"alreadyCut",WOULD_SPLIT:"wouldSplit"});function Lc(i,t){let e=i.edge(t);return e.cut?Ci.ALREADY_CUT:e.bridge?Ci.WOULD_SPLIT:Ci.OK}function Id(i,t){let e=Lc(i,t);return e!==Ci.OK||(i.setCut(t,!0),i.update()),e}function Pd(i){return i.edges.size-i.cutCount()-(i.faces.size-1)}var rx=-.001;function Ld(i,t,{maxWrong:e=2,rand:n=Math.random,openAll:s=!1}={}){let r=xc(i,t);if(!r)return null;let o=i.edge(t),a=o.faces.find(x=>!r.has(x)),l=o.faces.find(x=>r.has(x)),c=Ju(i,t,{openAll:s}),{poses:h}=yn(i.topo,i.joinedEdgeIds(),{...i.angles(),...c},i.rootId,i.rootPose),f=[...r],u=f.map(x=>({faceId:x,pose:h[x]})),m=(x,w)=>i.face(x).restCenter.clone().applyMatrix4(w),v=[...i.faceList().filter(x=>!r.has(x.id)).map(x=>m(x.id,h[x.id])),...u.map(x=>m(x.faceId,x.pose))],p=x=>u.map(w=>({faceId:w.faceId,pose:x.clone().multiply(w.pose)})),d=[],E=x=>x.every(w=>{let P=m(w.faceId,w.pose);return i.face(w.faceId).restCorners.every(N=>N.clone().applyMatrix4(w.pose).y>=rx)&&v.every(N=>N.distanceTo(P)>.45)&&d.every(N=>N.every(O=>m(O.faceId,O.pose).distanceTo(P)>.45))}),I=h[a],M=i.face(a).restNormal.clone().transformDirection(I),S=m(a,I);for(let x of xs([1,2,3],n)){if(d.length>=e)break;let w=new At().makeTranslation(S.x,S.y,S.z).multiply(new At().makeRotationAxis(M,x*Math.PI/2)).multiply(new At().makeTranslation(-S.x,-S.y,-S.z)),P=p(w);E(P)&&d.push(P)}if(d.length<e){let x=u.find(C=>C.faceId===l).pose,w=i.face(l),P=w.restNormal.clone().transformDirection(x),N=w.restCorners[1].clone().sub(w.restCorners[0]).transformDirection(x),O=new L().crossVectors(P,N),R=[];for(let C=-3;C<=3;C++)for(let B=-3;B<=3;B++)(C||B)&&R.push(N.clone().multiplyScalar(C).addScaledVector(O,B));R.sort((C,B)=>C.length()-B.length());for(let C of R){if(d.length>=e)break;let B=p(new At().makeTranslation(C.x,C.y,C.z));E(B)&&d.push(B)}}let b=x=>x.map(w=>({...w,corners:i.face(w.faceId).restCorners.map(P=>P.clone().applyMatrix4(w.pose))})),A=xs([{id:"correct",correct:!0,faces:b(u)},...d.map((x,w)=>({id:`wrong${w}`,correct:!1,faces:b(x)}))],n);return{edgeId:t,parentId:a,moving:f,targets:c,choices:A}}function Dd(i){return i.edgeList().filter(t=>!t.cut&&t.bridge&&t.angle<90).map(t=>({edgeId:t.id,side:xc(i,t.id)})).sort((t,e)=>t.side.size-e.side.size)}var ox=9,Da=class{constructor(t){this.ctx=t,this.selected=null,this.quiz=null,this.openable=[],this.history=[],this.complete=!1,this.reopen=null,this.saved=null}enter(){let{cube:t,view:e,sceneView:n,toast:s,tray:r}=this.ctx;if(this.selected=null,this.quiz=null,e.setGhosts([]),e.setFaceStyler(()=>({})),e.setEdgeStyler((o,a)=>this.styleEdge(o,a)),r.setMode({showAll:!1,interactive:!0}),this.saved){t.restore(this.saved.snapshot),this.history=this.saved.history,this.complete=this.saved.complete,this.reopen=this.saved.reopen,r.setCurrent(this.saved.trayKey),this.saved=null,this.refreshOpenable(),this.openable.length&&s.show("hint.tapFace",{},{ms:0});return}t.reset(),this.history=[],this.complete=!1,this.reopen=null,r.setCurrent(null),this.refreshOpenable(),n.resetView(),s.show("hint.start",{},{ms:7e3})}leave(){let{cube:t,actions:e,view:n,tray:s}=this.ctx;this.saved={snapshot:t.snapshot(),history:this.history,complete:this.complete,reopen:this.reopen,trayKey:s.currentKey},e.hide(),n.setGhosts([]),n.setPulse([]),this.quiz=null,this.selected=null}discard(){this.saved=null,this.quiz=null,this.selected=null,this.reopen=null,this.ctx.actions.hide()}onFloor(t){let e=this.ctx.cube.face(t);return Math.abs(e.position.y)<.001&&e.normal.y<-.999}styleEdge(t,e){let n=this.ctx.theme;return t.id===this.selected?.edgeId?{color:n.selected,scale:1.8,halo:!0}:this.quiz?.hintEdge===t.id?{color:n.edge,scale:1.6,halo:!0}:t.cut?this.onFloor(e)?{color:n.edgeNet,scale:1.1}:{color:n.edgeCut,scale:1.15}:this.complete?{color:n.edge,scale:1,dashed:!0}:t.faces.every(s=>this.onFloor(s))?{color:n.edgeFold,scale:1}:{color:n.edge,scale:1}}onHover(t){this.ctx.view.setHover(t)}partOf(t){return this.openable.find(e=>e.side.has(t))??null}onTap(t){if(this.ctx.animator.busy)return;if(!t){this.deselect();return}if(t.kind==="ghost"){this.quiz&&this.answer(t.id);return}let e=t.kind==="face"?t.faceId:t.under&&t.d>ox&&this.partOf(t.under)?t.under:null;if(e){let n=this.quiz?null:this.partOf(e);if(n){this.deselect(),this.openWithPrediction(n.edgeId);return}this.quiz||this.deselect();return}t.kind==="edge"&&this.select(t.edgeId,t.faceId)}select(t,e){let{cube:n,actions:s,toast:r,view:o}=this.ctx;this.quiz&&this.cancelQuiz(),this.selected={edgeId:t,faceId:e},o.sync();let a=n.edge(t);if(a.cut){s.hide(),r.show("msg.alreadyCut");return}let l=[{id:"cut",icon:Rd,labelKey:"action.cut",onClick:()=>this.cut(t,e)}];a.bridge&&a.angle<ve&&l.push({id:"unfold",icon:Ge.unfold,labelKey:"action.unfold",onClick:()=>this.openWithPrediction(t)}),a.bridge&&a.angle>hi&&l.push({id:"fold",icon:Ge.fold,labelKey:"action.fold",onClick:()=>this.fold(t)}),s.show(a,e,l)}deselect(){this.selected&&(this.selected=null,this.ctx.actions.hide(),this.ctx.view.sync())}async cut(t,e){let{cube:n,actions:s,scissors:r,sceneView:o,animator:a,toast:l,view:c}=this.ctx;if(a.busy)return;let h=n.edge(t),f=s.anchor();s.hide();let u=Lc(n,t)===Ci.WOULD_SPLIT;o.setCameraEnabled(!1),r.speed=a.speed;let m=!1;try{m=await a.run(()=>r.cut({from:f,ends:()=>h.endsOn(e).map(v=>o.toScreen(v)),stopAt:u?.45:1}))}finally{o.setCameraEnabled(!0)}if(this.selected=null,c.sync(),!m)return;if(u){l.show("msg.wouldSplit",{},{tone:"warn",ms:6e3});return}if(Id(n,t)!==Ci.OK)return;this.history.push({type:"cut",edgeId:t}),this.reopen=null;let _=this.openable.length;this.refreshOpenable(),this.openable.length>_&&l.show("hint.tapFace",{},{ms:0})}async fold(t){let{actions:e,view:n,animator:s}=this.ctx;s.busy||(e.hide(),this.selected=null,n.sync(),await this.turn({[t]:hi}))}async turn(t,{announce:e=!0}={}){let{cube:n,animator:s}=this.ctx;if(s.busy)return!1;let r=Object.fromEntries(Object.keys(t).map(o=>[o,n.edge(o).angle]));return this.complete=!1,await s.turnMany(t)?(this.history.push({type:"turn",before:r}),this.refreshOpenable(),this.checkComplete({announce:e}),!0):!1}foldState(){let{cube:t}=this.ctx;if(t.edgeList().some(n=>n.hinge&&n.angle>hi))return"fold";let e=this.reopen&&Object.keys(this.reopen);return e?.length&&e.every(n=>t.edge(n).hinge&&t.edge(n).angle===hi)?"unfold":null}async toggleFold(){let{cube:t,animator:e,toast:n,tray:s}=this.ctx,r=this.foldState();if(e.busy||!r)return;if(this.quiz&&this.cancelQuiz(),this.deselect(),n.hide(),r==="unfold"){await this.turn(this.reopen,{announce:!1});return}let o=this.complete?s.currentKey:null,a=t.edgeList().filter(c=>c.hinge&&c.angle>hi),l=Object.fromEntries(a.map(c=>[c.id,c.angle]));await this.turn(Object.fromEntries(a.map(c=>[c.id,hi])),{announce:!1})&&(this.reopen=l,o&&(s.setCurrent(o),n.show("fold.cube",{},{ms:7e3})))}async pickNet(t){let{cube:e,animator:n,tray:s,toast:r,view:o}=this.ctx;if(n.busy||!t.made||this.complete&&s.currentKey===t.key)return;this.quiz&&this.cancelQuiz(),this.deselect(),r.hide();let a=e.snapshot();this.setComplete(!1),o.setPulse([]),o.sync(),await n.changePaper(ya(e,t.tree),{onRecut:()=>o.sync()})&&(this.history.push({type:"paper",before:a}),this.reopen=null,this.refreshOpenable(),this.checkComplete({announce:!1}),r.show("tray.loaded",{},{ms:7e3}))}refreshOpenable(){let{cube:t,view:e}=this.ctx;this.openable=this.quiz?[]:Dd(t),e.setPulse([...new Set(this.openable.flatMap(n=>[...n.side]))])}openWithPrediction(t){let{cube:e,view:n,toast:s,predictions:r,actions:o,animator:a}=this.ctx;if(a.busy)return;o.hide(),this.selected=null;let l=Ld(e,t,{openAll:Pd(e)===0});l&&(this.quiz={...l,wrong:0,answered:!1,hintEdge:null},this.refreshOpenable(),r.ask({activity:"make",question:"unfold",expected:"correct",state:e.snapshot()}),n.setGhosts(l.choices.map(c=>({id:c.id,squares:c.faces.map(h=>({corners:h.corners,number:e.face(h.faceId).number}))}))),n.fadeGhosts(n.ghostMeshes(),0,this.ctx.theme.candidateAlpha,350),n.setFaceStyler(c=>({selected:l.moving.includes(c.id)})),s.show("hint.predict",{},{ms:0}))}cancelQuiz(){let{view:t,toast:e}=this.ctx;this.quiz=null,t.setGhosts([]),t.setFaceStyler(()=>({})),e.hide(),this.refreshOpenable()}async answer(t){let{view:e,toast:n,predictions:s,theme:r}=this.ctx,o=this.quiz,a=o?.choices.find(l=>l.id===t);if(a){if(o.answered||(o.answered=!0,s.answer(a.correct?"correct":t),s.check()),!a.correct){o.wrong++,o.choices=o.choices.filter(c=>c!==a);let l=e.ghostMeshes(t);l.forEach(c=>{c.userData.id=null}),o.wrong>=2?(o.hintEdge=o.edgeId,e.sync(),n.show("hint.wrongAgain",{},{ms:0})):n.show("hint.wrong",{},{ms:0}),await e.fadeGhosts(l,.55,0,650,r.selected),l.forEach(c=>{c.visible=!1});return}e.fadeGhosts(e.ghostMeshes().filter(l=>l.userData.id!==t),r.candidateAlpha,0,250),n.show("hint.right",{},{ms:2600,tone:"success"}),this.quiz=null,e.setFaceStyler(()=>({})),await this.turn(o.targets),e.setGhosts([])}}checkComplete({announce:t=!0}={}){let{cube:e,toast:n,tray:s,view:r}=this.ctx;if(this.setComplete(!1),!ju(e))return;if(!Ku(e).ok){n.show("net.invalid",{},{tone:"warn"});return}this.setComplete(!0),r.sync();let a=ms(e.topo,e.poses()),l=s.add(gs(Object.values(a)),e.hingeEdgeIds());!t&&l==="same"||n.showAll([["net.verified",{cuts:e.cutCount(),folds:e.hingeEdgeIds().length}],l==="new"?s.celebration():["net.same"]],{ms:12e3,tone:"success"})}setComplete(t){this.complete=t,t||this.ctx.tray.setCurrent(null)}async undo(){let{cube:t,animator:e,actions:n,view:s,toast:r}=this.ctx;if(e.busy)return;if(this.quiz){this.cancelQuiz();return}let o=this.history[this.history.length-1];if(o){if(n.hide(),this.selected=null,r.hide(),this.complete=!1,o.type==="turn"){if(!await e.turnMany(o.before))return}else if(o.type==="paper"){if(s.setPulse([]),s.sync(),!await e.changePaper(o.before.edges,{onRecut:()=>s.sync()}))return}else t.setCut(o.edgeId,!1),t.update();this.history.pop(),s.sync(),this.refreshOpenable(),this.checkComplete({announce:!1})}}async restart(){let{animator:t,cube:e,actions:n,view:s,toast:r}=this.ctx;t.busy||(this.quiz=null,this.selected=null,n.hide(),s.setGhosts([]),s.setFaceStyler(()=>({})),s.setPulse([]),r.hide(),this.setComplete(!1),s.sync(),await t.settleAll(hi),e.reset(),this.history=[],this.reopen=null,this.refreshOpenable(),r.show("hint.again",{},{ms:5e3}))}};var Na=class{constructor(t){this.ctx=t,this.faceId=null,this.choices=[],this.moves=[],this.lastMove=null,this.saved=null}enter({tree:t=null}={}){let{cube:e,view:n,tray:s,toast:r,sceneView:o}=this.ctx;this.faceId=null,this.choices=[],this.lastMove=null;let a=!t&&this.saved&&this.saved.trayVersion===s.version;a?(e.restore(this.saved.snapshot),this.moves=this.saved.moves):(e.setNet(t??s.latestTree()??dc(e.topo,kn),ve),this.moves=[]);let l=a?this.saved.trayKey:null;this.saved=null,n.setGhosts([]),n.setFaceStyler(c=>({selected:c.id===this.faceId})),n.setEdgeStyler((c,h)=>this.styleEdge(c,h)),o.resetView(),s.setMode({showAll:!0,interactive:!0}),this.isFolded()?s.setCurrent(l):this.markTray(),this.idle(),r.show(this.isFolded()?"fold.cube":"a3.pickFace",{},{ms:0})}leave(){let{cube:t,view:e,tray:n}=this.ctx;this.saved={snapshot:t.snapshot(),moves:this.moves,trayVersion:n.version,trayKey:n.currentKey},e.setGhosts([]),e.setPulse([]),n.setMode({showAll:!1,interactive:!1})}discard(){this.saved=null}netKey(){let t=ms(this.ctx.cube.topo,this.ctx.cube.poses());return t?gs(Object.values(t)):null}markTray(){let t=this.netKey();t&&this.ctx.tray.setCurrent(t)}isFolded(){let{cube:t}=this.ctx;return t.hingeEdgeIds().some(e=>t.edge(e).angle!==ve)}idle(){let{cube:t,view:e}=this.ctx;this.faceId=null,this.choices=[],e.setGhosts([]),e.setPulse(this.isFolded()?[]:yc(t).map(n=>n.id))}isFlat(t){let e=this.ctx.cube.face(t);return Math.abs(e.position.y)<.001&&Math.abs(e.normal.y)>.999}styleEdge(t,e){let n=this.ctx.theme;if(t.cut)return this.isFlat(e)?{color:n.edgeNet,scale:1.1}:{color:n.edgeCut,scale:1.15};let s=t.faces.every(r=>this.isFlat(r));return t.id===this.lastMove?{color:n.selected,scale:1.6,dashed:s}:{color:n.edge,scale:1,dashed:s}}onHover(){}async onTap(t){let{cube:e,animator:n,toast:s,view:r}=this.ctx;if(n.busy)return;if(this.isFolded()){(t?.kind==="face"||t?.kind==="edge")&&s.show("fold.unfoldFirst",{},{tone:"warn",ms:5e3});return}if(t?.kind==="ghost"){this.faceId&&await this.answer(t.id);return}let o=t?.kind==="face"?t.faceId:t?.kind==="edge"?t.under??t.faceId:null;if(o){yc(e).some(a=>a.id===o)?this.choose(o):s.show("a3.notOuter",{},{tone:"warn"});return}this.faceId&&(this.idle(),r.sync(),s.show("a3.pickFace",{},{ms:0}))}choose(t){let{cube:e,view:n,toast:s,predictions:r}=this.ctx;this.faceId=t,this.lastMove=null,this.choices=id(e,t),n.setPulse([]),n.setGhosts(this.choices.map(o=>({id:o.id,squares:[{corners:o.corners,number:e.face(t).number}]}))),n.fadeGhosts(n.ghostMeshes(),0,this.ctx.theme.candidateAlpha,350),n.sync(),this.answered=!1,r.ask({activity:"transform",question:"move",expected:"correct",state:e.snapshot()}),s.show("a3.pickPlace",{},{ms:0})}async answer(t){let{cube:e,view:n,toast:s,predictions:r,animator:o,tray:a,theme:l}=this.ctx,c=this.choices.find(d=>d.id===t);if(!c)return;if(this.answered||(this.answered=!0,r.answer(c.correct?"correct":t),r.check()),!c.correct){this.choices=this.choices.filter(I=>I!==c);let d=n.ghostMeshes(t);d.forEach(I=>{I.userData.id=null});let E=c.overlaps[0];E?(n.flashFaces(E),s.show("a3.wrong",{a:e.face(E[0]).number,b:e.face(E[1]).number},{ms:0,tone:"warn"})):s.show("a3.wrongGeneric",{},{ms:0,tone:"warn"}),await n.fadeGhosts(d,.55,0,650,l.selected),d.forEach(I=>{I.visible=!1});return}let h=this.faceId;n.fadeGhosts(n.ghostMeshes().filter(d=>d.userData.id!==t),l.candidateAlpha,0,250),s.hide();let f=bc(e,h,c.edgeId),u=this.netKey();if(this.choices=[],n.setGhosts([]),this.faceId=null,this.lastMove=c.edgeId,n.sync(),!await o.playMove(f,{onSwap:()=>n.sync()}))return;this.moves.push({faceId:h,oldHinge:f.oldHinge}),this.idle(),n.sync();let m=this.netKey(),_=e.face(h).number;if(m!==u&&a.add(m,e.hingeEdgeIds())==="new"){s.showAll([a.celebration()],{ms:0,tone:"success"});return}this.markTray();let v=m===u?[["net.unchanged",{n:_}]]:[["a3.moved",{n:_}],["net.same"]],p=Mc(e,h).length;p>0&&v.push(["a3.moreSpots",{count:p}]),s.showAll(v,{ms:0})}async undo(){let{cube:t,animator:e,view:n,toast:s}=this.ctx;if(e.busy)return;if(this.isFolded()){await this.toggleFold();return}if(this.faceId){this.idle(),n.sync(),s.show("a3.pickFace",{},{ms:0});return}let r=this.moves[this.moves.length-1];if(!r)return;let o=bc(t,r.faceId,r.oldHinge);o&&(s.hide(),n.setPulse([]),this.lastMove=r.oldHinge,n.sync(),await e.playMove(o,{onSwap:()=>n.sync()})&&(this.moves.pop(),this.idle(),n.sync(),this.markTray(),s.show("a3.pickFace",{},{ms:0})))}async changeTo(t){let{animator:e,view:n,toast:s}=this.ctx;e.busy||(this.idle(),n.setPulse([]),this.lastMove=null,s.hide(),n.sync(),await e.changeNet(t,{onRecut:()=>n.sync()})&&(this.moves=[],this.idle(),n.sync(),this.markTray(),s.show("a3.pickFace",{},{ms:0})))}showNet(t){let{cube:e,view:n,toast:s,sceneView:r,changeScene:o}=this.ctx;return o(()=>{e.setNet(t,ve),this.moves=[],this.lastMove=null,this.idle(),n.sync(),r.centreNow(),this.markTray(),s.show("a3.pickFace",{},{ms:0})})}pickNet(t){if(!this.ctx.animator.busy){if(!t.made){this.ctx.toast.show("tray.locked",{},{tone:"warn",ms:5e3});return}t.key!==this.netKey()&&this.showNet(t.tree)}}restart(){return this.changeTo(dc(this.ctx.cube.topo,kn))}foldState(){return this.isFolded()?"unfold":"fold"}async toggleFold(){let{cube:t,animator:e,view:n,toast:s}=this.ctx;if(e.busy)return;let r=this.isFolded();this.faceId=null,this.choices=[],this.lastMove=null,n.setGhosts([]),n.setPulse([]),s.hide(),n.sync(),await e.turnMany(r?ad(t):xa(t))&&(this.idle(),n.sync(),r&&this.markTray(),s.show(r?"a3.pickFace":"fold.cube",{},{ms:0}))}async flip(){let{animator:t,view:e,toast:n}=this.ctx;if(!t.busy){if(this.isFolded()){n.show("fold.unfoldFirst",{},{tone:"warn",ms:5e3});return}this.idle(),e.setPulse([]),n.hide(),e.sync(),await t.flip()&&(this.idle(),e.sync(),n.show("a3.flipped",{},{ms:6e3}))}}};var ax=180;function Nd(){let i=R=>document.getElementById(R);if(da(),!_d()){let R=i("fatal");R.dataset.i18n="error.webgl",R.textContent=fe("error.webgl"),R.hidden=!1,hc(()=>da());return}let t=wd(),e=i("workspace"),n=new Ea(e,t),s=new _a,r=new Ta(s,n.scene,t);n.cubeView=r,r.onDirty=()=>n.invalidate();let o=()=>{let R=new En;for(let C of s.faceList())for(let B of C.corners)R.expandByPoint(B);n.follow(R.getCenter(new L),R.getSize(new L).length()/2)};s.onChange(o),o(),n.onFrame.add(()=>r.tick(performance.now()));let a=i("overlay"),l={cube:s,view:r,sceneView:n,theme:t,animator:new va(s),predictions:new Sa,toast:new Pa(i("toast")),actions:new Ca(a,n),scissors:new Ia(a),tray:new La(i("tray"),mc(s.topo))},c={make:new Da(l),transform:new Na(l)},h=null,f=!1,u=new Aa(n);u.onHover=R=>c[h].onHover(R),u.onTap=R=>{f||c[h].onTap(R)};async function m(R){if(!(l.animator.busy||f)){f=!0,e.classList.add("scene-fade"),await new Promise(C=>setTimeout(C,ax));try{R()}finally{n.invalidate(),e.classList.remove("scene-fade"),f=!1}}}l.changeScene=m;function _(R){h&&c[h].leave(),h=R,document.querySelectorAll("[data-mode]").forEach(C=>C.setAttribute("aria-pressed",String(C.dataset.mode===R))),u.edgesEnabled=R==="make",r.setHover(null),l.toast.hide(),c[R].enter(),M()}document.querySelectorAll("[data-mode]").forEach(R=>R.addEventListener("click",()=>{R.dataset.mode!==h&&m(()=>_(R.dataset.mode))}));let v=88,p=()=>{let R=e.getBoundingClientRect();if(!R.height)return;let C=Math.max(i("toolbar").getBoundingClientRect().bottom,document.querySelector(".modes").getBoundingClientRect().bottom)-R.top,B=i("tray").hidden?null:i("tray").getBoundingClientRect(),W=(B?R.bottom-B.top:0)+v,X=(nt,q)=>Math.min(Math.max(0,nt),R.height*q);n.setInsets({top:X(C,.3),bottom:X(W,.45)})};l.tray.onHeight=p,window.addEventListener("resize",p),l.tray.onPick=R=>{f||c[h].pickNet(R)};let d=!0,E=[{id:"labels",icon:()=>d?Ge.eye:Ge.eyeOff,name:()=>d?"labelsHide":"labelsShow",run:()=>{d=!d,r.setLabelsVisible(d)}},{id:"fold",icon:()=>c[h].foldState()==="unfold"?Ge.net:Ge.box,name:()=>c[h].foldState()==="unfold"?"unfoldAll":"foldAll",disabled:()=>c[h].foldState()===null,run:()=>c[h].toggleFold()},{id:"flip",only:"transform",icon:()=>Ge.flip,name:()=>"flip",run:()=>c.transform.flip()},{id:"undo",icon:()=>Ge.undo,name:()=>"undo",run:()=>c[h].undo()},{id:"restart",icon:()=>h==="transform"?Ge.restart:Ge.cube,name:()=>h==="transform"?"newNet":"newCube",run:()=>c[h].restart()},{id:"lang",icon:()=>Ge.globe,name:()=>"language",run:()=>P()}],I=i("toolbar");I.innerHTML=E.map(R=>`<button class="tool" data-tool="${R.id}"></button>`).join("");for(let R of E)I.querySelector(`[data-tool="${R.id}"]`).addEventListener("click",()=>{f||(R.run(),M())});function M(){for(let R of E){let C=I.querySelector(`[data-tool="${R.id}"]`);C.hidden=!!R.only&&R.only!==h,C.disabled=!!R.disabled?.(),C.innerHTML=`${R.icon()}<span class="tool-label">${fe(`toolbar.${R.name()}`)}</span>`,C.title=fe(`tool.${R.name()}`),C.setAttribute("aria-label",fe(`tool.${R.name()}`))}n.renderer.domElement.setAttribute("aria-label",fe("view.canvas")),p()}let S=!1;s.onChange(()=>{S=!0}),n.onFrame.add(()=>(S&&!l.animator.busy&&h&&(S=!1,M()),!1));let b=R=>typeof R.showModal=="function"?R.showModal():R.setAttribute("open",""),A=R=>typeof R.close=="function"?R.close():R.removeAttribute("open"),x=i("settings"),w=i("lang-options");w.innerHTML=lc.map(R=>`
    <label class="radio"><input type="radio" name="lang" value="${R.code}"><span>${R.name}</span></label>`).join("");function P(){w.querySelectorAll("input").forEach(R=>{R.checked=R.value===Fu()}),b(x)}w.addEventListener("change",R=>Ou(R.target.value)),i("close-settings").addEventListener("click",()=>A(x));let N=i("erase");function O(){l.animator.busy||f||(b(N),i("erase-cancel").focus())}l.tray.onErase=O,i("erase-cancel").addEventListener("click",()=>A(N)),i("erase-ok").addEventListener("click",()=>{A(N),m(()=>{c.make.discard(),c.transform.discard(),l.tray.clear(),l.predictions.clear(),c[h].enter(),l.toast.showAll([["erase.done"],[h==="make"?"hint.start":"a3.pickFace"]],{ms:h==="make"?9e3:0})})}),hc(()=>{M(),l.tray.render(),l.toast.render(),l.actions.render()}),_("make"),p(),window.cubeApp={...l,activities:c}}Nd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
