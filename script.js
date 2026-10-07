const P=[
{n:'Mercury',t:'The swift, scorched messenger',c:['#d8d2ca','#8d857c','#2c2926'],tint:'#cfc6ba',orb:[7,88,5],
 d:'The smallest planet and closest to the Sun, yet not the hottest. Mercury is a heavily cratered rocky world with only a thin exosphere, so it swings from blazing days to freezing nights.',
 f:[['4,879 km','Diameter'],['88 days','One year'],['59 days','One rotation'],['0','Moons']],
 k:['Extreme swings, -180°C to 430°C','Surface resembles Earth\'s Moon','No moons or rings']},
{n:'Venus',t:'Earth\'s twin gone wrong',c:['#fff0c4','#e0a44e','#6b3a14'],tint:'#f0b866',orb:[10,225,9],bands:1,
 d:'Similar to Earth in size, but wrapped in thick carbon dioxide and sulfuric acid clouds. The runaway greenhouse effect makes it the hottest planet. It spins backwards, so the Sun rises in the west.',
 f:[['12,104 km','Diameter'],['225 days','One year'],['~465°C','Surface'],['0','Moons']],
 k:['Hottest planet in the Solar System','Retrograde, very slow rotation','Volcanoes and lava plains']},
{n:'Earth',t:'The only known home of life',c:['#9fe0ff','#2b78d6','#0a1f4a'],tint:'#5fb0ff',orb:[13,365,10],bands:2,
 d:'Liquid water, a balanced nitrogen and oxygen atmosphere and a protective magnetic field make Earth the most diverse world we know, with oceans, mountains, forests and deserts.',
 f:[['12,742 km','Diameter'],['365 days','One year'],['24 hours','One rotation'],['1','Moon']],
 k:['Only known planet with life','Water in solid, liquid and gas forms','Magnetic field shields it from solar radiation']},
{n:'Mars',t:'The cold red frontier',c:['#ffb08a','#c4502a','#3a1208'],tint:'#ff7a4d',orb:[16,687,8],bands:1,
 d:'Iron-rich soil gives Mars its red color. Dried riverbeds and minerals show liquid water once flowed here. It holds Olympus Mons, the tallest volcano in the Solar System, and the canyon Valles Marineris.',
 f:[['6,779 km','Diameter'],['687 days','One year'],['24.6 hours','One rotation'],['2','Moons']],
 k:['Thin CO₂ atmosphere, very cold','Evidence of ancient water','Moons: Phobos and Deimos']},
{n:'Jupiter',t:'King of the planets',c:['#f6e3c6','#c98f58','#4a2c18'],tint:'#e0a971',orb:[21,4333,22],bands:3,
 d:'A gas giant of hydrogen and helium with no solid surface. Its Great Red Spot is a storm that has raged for centuries, and its magnetic field is the strongest of any planet.',
 f:[['139,820 km','Diameter'],['11.9 years','One year'],['10 hours','One rotation'],['95+','Moons']],
 k:['Largest planet','Ganymede is the largest moon in the Solar System','Faint ring system']},
{n:'Saturn',t:'Lord of the rings',c:['#fff1cf','#d8b878','#5a4524'],tint:'#e6c98a',orb:[26,10759,18],bands:3,ring:1,
 d:'Famous for a spectacular ring system of ice, rock and dust. Saturn is the least dense planet and would float in a big enough ocean. Its moon Titan has a thick atmosphere and methane lakes.',
 f:[['116,460 km','Diameter'],['29.5 years','One year'],['10.7 hours','One rotation'],['140+','Moons']],
 k:['Least dense planet','Titan has methane and ethane lakes','Strong winds and storms']},
{n:'Uranus',t:'The ice giant on its side',c:['#e2fbff','#7fd6e0','#1e5a68'],tint:'#8fe3ee',orb:[30,30687,14],bands:2,
 d:'Methane absorbs red light and gives Uranus its blue-green color. Tilted about 98 degrees, it rolls around the Sun and endures decades of continuous sunlight or darkness.',
 f:[['50,724 km','Diameter'],['84 years','One year'],['17 hours','One rotation'],['27','Moons']],
 k:['Coldest planet in the Solar System','Rotates on its side','Water, ammonia and methane ices']},
{n:'Neptune',t:'The distant storm world',c:['#a9c4ff','#2f56d8','#0a1352'],tint:'#6b8cff',orb:[34,60190,13],bands:3,
 d:'The farthest planet is a deep blue ice giant with the fastest winds in the Solar System. Its largest moon Triton orbits backwards and was probably captured.',
 f:[['49,244 km','Diameter'],['165 years','One year'],['16 hours','One rotation'],['14','Moons']],
 k:['Winds above 2,000 km/h','Triton: retrograde, likely captured','Faint ring system']}];

const D=[9,13,18,23,34,46,58,70],R=[.6,1.1,1.2,.9,3,2.6,1.8,1.7],TILT=[.03,.05,.41,.44,.05,.45,1.7,.5];
const MOONS=[0,0,1,2,12,12,10,8]; // moons drawn per planet
const rnd=(a,b)=>a+Math.random()*(b-a);

/* ---------- Procedural textures ---------- */
function texture(p){
 const c=document.createElement('canvas');c.width=512;c.height=256;const g=c.getContext('2d');
 const gr=g.createLinearGradient(0,0,0,256);gr.addColorStop(0,p.c[1]);gr.addColorStop(.5,p.c[0]);gr.addColorStop(1,p.c[1]);
 g.fillStyle=gr;g.fillRect(0,0,512,256);
 if(p.n==='Earth'){
  for(let i=0;i<45;i++){g.globalAlpha=.85;g.fillStyle=i%5?'#3f8f4f':'#b9a56a';g.beginPath();g.ellipse(rnd(0,512),rnd(30,226),rnd(15,50),rnd(8,26),rnd(0,3),0,7);g.fill()}
  for(let i=0;i<40;i++){g.globalAlpha=.3;g.fillStyle='#fff';g.beginPath();g.ellipse(rnd(0,512),rnd(0,256),rnd(20,60),rnd(4,10),0,0,7);g.fill()}
 }else if(p.bands>=2){
  for(let i=0;i<(p.bands===3?70:16);i++){g.globalAlpha=rnd(.1,.35);g.fillStyle=p.c[i%3];g.fillRect(0,rnd(0,256),512,rnd(2,p.bands===3?16:30))}
  if(p.n==='Jupiter'){g.globalAlpha=.8;g.fillStyle='#b5512f';g.beginPath();g.ellipse(340,168,28,15,0,0,7);g.fill()}
 }else{
  for(let i=0;i<160;i++){g.globalAlpha=rnd(.1,.3);g.fillStyle=i%2?p.c[2]:p.c[0];g.beginPath();g.arc(rnd(0,512),rnd(0,256),rnd(2,22),0,7);g.fill()}
 }
 return new THREE.CanvasTexture(c);
}
function glowTex(color){
 const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');
 const r=g.createRadialGradient(128,128,0,128,128,128);r.addColorStop(0,color);r.addColorStop(.25,color+'88');r.addColorStop(1,'#0000');
 g.fillStyle=r;g.fillRect(0,0,256,256);return new THREE.CanvasTexture(c);
}

/* ---------- Scene ---------- */
const cv=document.getElementById('stars');
const ren=new THREE.WebGLRenderer({canvas:cv,antialias:true});
ren.setPixelRatio(Math.min(devicePixelRatio,2));
ren.toneMapping=THREE.ACESFilmicToneMapping;ren.toneMappingExposure=.9;
const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,3000);
function size(){ren.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}
addEventListener('resize',size);size();

scene.add(new THREE.AmbientLight(0x8899bb,.1));
scene.add(new THREE.PointLight(0xfff0d0,1.1,0,0));

// stars
const sp=new Float32Array(9000);
for(let i=0;i<3000;i++){
 const u=Math.random()*2-1,t=Math.random()*6.283,s=Math.sqrt(1-u*u),r=rnd(700,1400);
 sp.set([r*s*Math.cos(t),r*u,r*s*Math.sin(t)],i*3)}
const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(sp,3));
scene.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0xcfe0ff,size:2.2,sizeAttenuation:false})));

// sun
const sun=new THREE.Mesh(new THREE.SphereGeometry(4.5,48,48),new THREE.MeshBasicMaterial({color:0xffb347}));
scene.add(sun);
[[60,'#ffb347',.9],[130,'#ff6a3d',.35]].forEach(([s,col,o])=>{
 const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex(col),blending:THREE.AdditiveBlending,depthWrite:false,opacity:o}));
 sprite.scale.set(s,s,1);scene.add(sprite)});

// planets
const bodies=P.map((p,i)=>{
 const o=new THREE.Group(),g=new THREE.Group(),
 m=new THREE.Mesh(new THREE.SphereGeometry(R[i],64,64),new THREE.MeshStandardMaterial({map:texture(p),color:0xbbbbbb,roughness:.95,metalness:0}));
 g.rotation.z=TILT[i];g.add(m);o.add(g);scene.add(o);
 if(p.ring){ // Saturn's rings
  const gm=new THREE.RingGeometry(R[i]*1.35,R[i]*2.4,128),pos=gm.attributes.position,uv=gm.attributes.uv,v=new THREE.Vector3();
  for(let k=0;k<pos.count;k++){v.fromBufferAttribute(pos,k);uv.setXY(k,(v.length()-R[i]*1.35)/(R[i]*1.05),.5)}
  const c=document.createElement('canvas');c.width=256;c.height=1;const x=c.getContext('2d');
  for(let k=0;k<256;k++){x.fillStyle=`rgba(${200+k%30},${180+k%25},140,${(k%17<3||k<20)?.15:.75})`;x.fillRect(k,0,1,1)}
  const ring=new THREE.Mesh(gm,new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),side:THREE.DoubleSide,transparent:true}));
  ring.rotation.x=-Math.PI/2;g.add(ring)}
 // orbit path
 const pts=[];for(let k=0;k<=128;k++){const a=k/128*6.283;pts.push(new THREE.Vector3(Math.cos(a)*D[i],0,Math.sin(a)*D[i]))}
 scene.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x4a5f88,transparent:true,opacity:.35})));
 return {o,m,a:i*1.3+.5,w:.38/Math.pow(D[i],.75)}});

// asteroid belt (between Mars and Jupiter)
const N=1500,belt=new THREE.InstancedMesh(
 new THREE.IcosahedronGeometry(.07,0),
 new THREE.MeshStandardMaterial({color:0x8a8178,roughness:1}),N),dm=new THREE.Object3D();
for(let i=0;i<N;i++){
 const a=Math.random()*6.283,r=rnd(26.5,31.5);
 dm.position.set(Math.cos(a)*r,rnd(-.6,.6),Math.sin(a)*r);
 dm.scale.setScalar(rnd(.5,2.2));dm.updateMatrix();belt.setMatrixAt(i,dm.matrix)}
scene.add(belt);

// moons
const moons=[];
bodies.forEach((b,i)=>{
 const base=i===4?1.8:i===5?2.7:2.2,step=i===3?1:.18;
 for(let k=0;k<MOONS[i];k++){
  const size=i===2?.28:i===3?.11-k*.035:rnd(.08,.28)*Math.min(1.2,R[i]/2);
  const mesh=new THREE.Mesh(new THREE.SphereGeometry(size,16,16),
   new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(rnd(.05,.12),.1,rnd(.4,.6)),roughness:1}));
  const d=R[i]*(base+k*step);
  b.o.add(mesh);
  moons.push({mesh,d,a:rnd(0,6.283),w:1.6/Math.sqrt(d)*rnd(.8,1.2),t:i===2?.1:rnd(-.15,.15)});
 }
});

/* ---------- Camera director ---------- */
let active=-1,started=false,mx=0,my=0,SPEED=4;
const up=new THREE.Vector3(0,1,0),want=new THREE.Vector3(),look=new THREE.Vector3(),wantLook=new THREE.Vector3(),
 dir=new THREE.Vector3(),right=new THREE.Vector3();
cam.position.set(0,300,650);
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});

/* ---------- Shooting stars ---------- */
const fw=new THREE.Vector3(),rt=new THREE.Vector3(),uv=new THREE.Vector3(),SS=[];
for(let i=0;i<6;i++){
 const g=new THREE.BufferGeometry();
 g.setAttribute('position',new THREE.BufferAttribute(new Float32Array(6),3));
 g.setAttribute('color',new THREE.BufferAttribute(new Float32Array([0,0,0,.85,.93,1]),3));
 const l=new THREE.Line(g,new THREE.LineBasicMaterial({vertexColors:true,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false}));
 l.frustumCulled=false;l.visible=false;scene.add(l);
 SS.push({l,life:0,wait:rnd(1,5),pos:new THREE.Vector3(),vel:new THREE.Vector3()});
}
function shoot(s){
 cam.getWorldDirection(fw);rt.crossVectors(fw,up).normalize();uv.crossVectors(rt,fw);
 const side=Math.random()<.5?-1:1;
 s.pos.copy(cam.position).addScaledVector(fw,rnd(250,450)).addScaledVector(rt,rnd(-200,200)).addScaledVector(uv,rnd(40,200));
 s.vel.set(0,0,0).addScaledVector(rt,side*rnd(450,800)).addScaledVector(uv,-rnd(150,350));
 s.life=rnd(.7,1.2);s.l.visible=true;
}

/* ---------- Animation loop ---------- */
const clock=new THREE.Clock();
(function loop(){
 const dt=clock.getDelta(),t=clock.elapsedTime;
 bodies.forEach((b,i)=>{b.a+=b.w*dt*SPEED;b.o.position.set(Math.cos(b.a)*D[i],0,Math.sin(b.a)*D[i]);b.m.rotation.y+=dt*(i>3&&i<6?.5:.25)});

 moons.forEach(m=>{m.a+=m.w*dt;m.mesh.position.set(Math.cos(m.a)*m.d,Math.sin(m.a)*m.d*m.t,Math.sin(m.a)*m.d)});

 SS.forEach(s=>{
  if(!s.l.visible){s.wait-=dt;if(s.wait<=0&&started)shoot(s);return}
  s.life-=dt;s.pos.addScaledVector(s.vel,dt);
  const tail=s.pos.clone().addScaledVector(s.vel,-.1),pa=s.l.geometry.attributes.position;
  pa.array.set([tail.x,tail.y,tail.z,s.pos.x,s.pos.y,s.pos.z]);pa.needsUpdate=true;
  s.l.material.opacity=Math.min(1,s.life*3);
  if(s.life<=0){s.l.visible=false;s.wait=rnd(1.5,6)}
 });

 sun.rotation.y+=dt*.1;belt.rotation.y+=dt*.01;
 if(!started){want.set(Math.sin(t*.08)*210,60,Math.cos(t*.08)*210);wantLook.set(0,0,0)}
 else if(active<0){want.set(mx*14,58+my*8,100);wantLook.set(0,0,0)}
 else{
  const p=bodies[active].o.position,r=R[active];
  dir.copy(p).setY(0).normalize();right.crossVectors(dir,up).normalize();
  want.copy(p).addScaledVector(dir,-(r*4+2.5)).addScaledVector(up,r*.7).addScaledVector(right,mx*r*.8);
  if(innerWidth<800)wantLook.copy(p).addScaledVector(up,-r*1.5);else wantLook.copy(p).addScaledVector(right,r*1.9);
 }
 const k=1-Math.pow(.02,dt);
 cam.position.lerp(want,k);look.lerp(wantLook,k);cam.lookAt(look);
 ren.render(scene,cam);requestAnimationFrame(loop)})();

/* ---------- Chapters and dots ---------- */
const ch=document.getElementById('chapters'),dots=document.getElementById('dots');
P.forEach((p,i)=>{
 const c=document.createElement('section');c.className='chapter';c.id=p.n.toLowerCase();c.style.setProperty('--tint',p.tint);
 c.innerHTML=`<h3>${p.n}</h3><div class="tag">${p.t}</div><p>${p.d}</p>
 <div class="facts">${p.f.map(f=>`<div><b>${f[0]}</b><span>${f[1]}</span></div>`).join('')}</div>
 <ul class="keys">${p.k.map(k=>`<li>${k}</li>`).join('')}</ul>`;
 ch.appendChild(c);
 const a=document.createElement('a');a.href='#'+c.id;a.title=p.n;a.setAttribute('aria-label',p.n);dots.appendChild(a)});
const cs=[...ch.children],da=[...dots.children];

/* ---------- Step navigation: one planet per scroll or key press ---------- */
let step=-1,lock=0,keyLock=0;

function go(n){
 n=Math.max(-1,Math.min(cs.length-1,n));if(n===step)return;
 step=n;active=n;
 cs.forEach((c,j)=>c.classList.toggle('in',j===n));
 da.forEach((a,j)=>a.classList.toggle('on',j===n));
 document.body.classList.toggle('away',n>=0);
 if(n>=0)document.documentElement.style.setProperty('--tint',P[n].tint);
}

function nav(d,gap){
 if(!started)return;const now=performance.now();
 if(now<lock){lock=Math.max(lock,now+150);return} // ignore trackpad momentum
 lock=now+gap;go(step+d);
}
addEventListener('wheel',e=>{e.preventDefault();if(Math.abs(e.deltaY)>4)nav(e.deltaY>0?1:-1,900)},{passive:false});

let ty=0;
addEventListener('touchstart',e=>ty=e.touches[0].clientY,{passive:true});
addEventListener('touchend',e=>{const dy=ty-e.changedTouches[0].clientY;if(Math.abs(dy)>40)nav(dy>0?1:-1,900)},{passive:true});

addEventListener('keydown',e=>{
 if(!started)return;
 const next=['ArrowDown','ArrowRight','PageDown',' '],prev=['ArrowUp','ArrowLeft','PageUp'];
 let d=0;
 if(next.includes(e.key))d=1;else if(prev.includes(e.key))d=-1;
 else if(e.key==='Home'){e.preventDefault();go(-1);return}
 else if(e.key==='End'){e.preventDefault();go(cs.length-1);return}
 if(!d)return;
 e.preventDefault();
 const now=performance.now();if(now<keyLock)return;keyLock=now+350;go(step+d);
});

da.forEach((a,i)=>a.onclick=e=>{e.preventDefault();if(started)go(i)});

document.getElementById('begin').onclick=()=>{started=true;document.body.classList.add('go')};

// Orbit speed slider (only works if the <input id="speed"> exists in index.html)
const sl=document.getElementById('speed');if(sl)sl.oninput=e=>SPEED=+e.target.value;