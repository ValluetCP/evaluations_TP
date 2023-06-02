# Intégration

Intégration de la maquette du restaurant *Ce soir*

La page est en full-width.
Typo Google Font : 'Caveat Brush'.
Font Awesome pour les icônes des réseaux sociaux.

Mettre en place une hierarchie de dossier correcte.
  projet >
    [img]>
    [css]>
      style.css
    index.html

Vous trouverez des textures pour le background du header ici :
  [cg_texture]('http://www.textures.com/browse/bare/45356')


* Les images sont dans le dossier img. A ranger dans l'arborescence du dossier
* Pour le logo vous utiliserez le fichier cerf.svg

Bon travail !



// il faut intégrer dans le fichier css pour l'affichage 
header{
    background-image:url("../img/planches.jpg");
    padding-bottom: 54px;
}

lien pour le flèche rouge dans header
https://www.w3schools.com/howto/howto_css_arrows.asp

lien vers l
https://www.w3schools.com/howto/howto_css_shapes.asp


img svg 'cerf' :

width : 300px;
height : 295px;

.triangle{
    display: inline-block;
    height: 0;
    width: 0;
    border-top: 120px solid rgba(229, 63, 111,0.7);
    border-left: 120px solid transparent;
    position: relative;
    /* left: 0px; */
    bottom: 134px;
   }
   .triangle  img{
       width: 250px;
   }
   
      .fleche{
       width:40px;
       height: 40px;
       display: inline-block;
       border-right:0.3em solid #E53F6F;
       border-top:0.3em solid #E53F6F;
       transform:rotate(125deg) skewY(20deg);
       /* position: relative;
       left:calc(50% - 20px); */
   }
   
   
.story{
width: 40%;
text-align: center;
padding:35px;
}