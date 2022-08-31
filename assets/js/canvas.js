// canvas javascript

var box,camera,scene,renderer,group,particle;

initialisation();
animate();

// initialisation function declearation
function initialisation(){
    box=document.body;      //selcet the body (canvas)
    camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1, 3000);   //set camera
    camera.position.z=1200;     //increse the value to set camera position and see more perticles
    scene=new THREE.Scene();
    var p=Math.PI*2;

    var program=function(e){
        e.beginPath();
        e.arc(0,0,0.5,0,p,true);
        e.fill();
    };
    group=new THREE.Group();
    scene.add(group);

    for(var i=0;i<1400;i++){        //i must be up to camera z axis position
        var material=new THREE.SpriteCanvasMaterial({
            color:Math.random()*0x808008+0x808008,      //set color
            program:program                             //call program
        });
        particle=new THREE.Sprite(material);
        particle.position.x=Math.random()*2000-1000;    //along X axis
        particle.position.y=Math.random()*2000-1000;    //along Y axis
        particle.position.z=Math.random()*2000-1000;    //along Z axis
        particle.scale.x=Math.random()*10+10;           //scale along X axis
        particle.scale.y=Math.random()*10+10;           //scale along Y axis

        group.add(particle);
    }
    renderer=new THREE.CanvasRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);        //call setPixelRatio function
    renderer.setSize(window.innerWidth,window.innerHeight);     //call the function setSize
    box.appendChild(renderer.domElement);
}

// animate function declearation

function animate(){
    requestAnimationFrame(animate);
    render();
}

// render_function function declearation

function render(){
	camera.position.x = (- camera.position.x);
	camera.position.y = (- camera.position.y);
    group.rotation.x=group.rotation.x+0.006;
    group.rotation.y=group.rotation.y+0.006;
    renderer.render(scene,camera);
}