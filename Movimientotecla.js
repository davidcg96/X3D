
function estado(val)
{
	print(val);
    if(val == "c")
	{  
            matiz = new SFColor(1.0,0.0,0.0);
    }
	else if(val=="w")
	{
		//mueve el peon para adelante y supuestamente la camara
		peon.set_translation[2]=peon.set_translation[2]-1.0;
		camaramuñeco.set_translation[2]=camaramuñeco.set_translation[2]-1.0;
		camaramuñecodetras.set_translation[2]=camaramuñecodetras.set_translation[2]-1.0;
    } 
	else if(val=="s")
	{
		peon.set_translation[2]=peon.set_translation[2]+1.0;
		camaramuñeco.set_translation[2]=camaramuñeco.set_translation[2]+1.0;
		camaramuñecodetras.set_translation[2]=camaramuñecodetras.set_translation[2]+1.0;
	}
	else if(val=="a")
	{		
		peon.set_translation[0]=peon.set_translation[0]-1.0;
		camaramuñeco.set_translation[0]=camaramuñeco.set_translation[0]-1.0;
		camaramuñecodetras.set_translation[0]=camaramuñecodetras.set_translation[0]-1.0;
    } 
	else if(val=="d")
	{
		peon.set_translation[0]=peon.set_translation[0]+1.0;
		camaramuñeco.set_translation[0]=camaramuñeco.set_translation[0]+1.0;
		camaramuñecodetras.set_translation[0]=camaramuñecodetras.set_translation[0]+1.0;
	}
	else
	{
            matiz = new SFColor(0.0,0.0,1.0);
    }  
} 
function colision(value)
{
		
		colormuro.set_diffuseColor= new SFColor(1.0,1.0,1.0);
		
}