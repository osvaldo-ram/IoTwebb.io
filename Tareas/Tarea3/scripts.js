const habilidades={
    'k6': { 
        imagen: '../../folder/img/1.jpg', 
        fondo: '#08ff77ff' 
    },
    'q': { 
        imagen: '../../folder/img/q.jpg', 
        fondo: '#278852ff' 
    },
    'w': { 
        imagen: '../../folder/img/w.jpg', 
        fondo: '#166037ff' 
    },
    'e': { 
        imagen: '../../folder/img/e.jpg', 
        fondo: '#2b6445ff' 
    },
    'r': { 
        imagen: '../../folder/img/r.jpg', 
        fondo: '#105830ff' 
    },
}
function seleccionarhabilidad (skill){
    const imagenP=document.getElementById('kha_zix');
    const bodyP=document.body;
    const data=habilidades[skill];
    if (data){
        imagenP.src=data.imagen;
        imagenP.alt=`khazix uso ${skill}`;
        bodyP.style.backgroundColor=data.fondo;
    }
    else{
        console.error(`algo salio mal ${skill}`);
        }


}