function eksport(titlep, txtp)
{
        var title=document.getElementById("headh");
	var txt=document.getElementById("info");
        var navwhere=document.getElementById("navwhere");
        title.innerHTML="<h2>"+titlep+"</h2>";
	txt.innerHTML=txtp;
        
        if(titlep != "Witaj !") navwhere.innerHTML="Strona Startowa &rarr;"+"<a href=\"#\">"+titlep+"</a>";
        else navwhere.innerHTML="Strona Startowa";

        if(titlep == "Nagrody") navwhere.innerHTML="Informacje &rarr;"+"<a href=\"#\">"+titlep+"</a>";
        if(titlep == "Regulamin") navwhere.innerHTML="Informacje &rarr;"+"<a href=\"#\">"+titlep+"</a>";
        if(titlep == "Polityka Prywatności") navwhere.innerHTML="Informacje &rarr;"+"<a href=\"#\">"+titlep+"</a>";
        
        faduj();
}
function faduj()
{
    var thisdiv = document.getElementById("fullarticle");

    $(thisdiv).show('slide', {direction: 'right'}, 360);
}
function casb(choosen)
{
    var c;
    
    for(var i=0;i < 10;i++)
    {
        c = document.querySelectorAll("ul > li")[i];
        c.style.fontWeight = "normal";
        
        if(choosen == i) c.style.fontWeight = "bold";
        if(choosen != i) c.style.fontWeight = "normal";
    }
    if(casb == "cls") c.style.fontWeight = "normal";
}
function start()
{
    var title = "Witaj !";
    var txt = "Witaj na Gray Calm Theme ! Szablonie stworzonym przez <a href=\"http://a.test10.besaba.com\">Vertigo Project</a>";
    eksport(title,txt);
    casb(0);
}      
function offer()
{
    var title = "Oferta";
    var txt = "- Przejrzytość strony<br />- Intuicyjna nawigacja<br />- Łatwość edycji kodu<br />- Nowoczesny wygląd<br />- Szybkość wczytywania<br />- Zgodnośc wyświetlania na różnych platformach";

    eksport(title,txt);
    casb(1);
}
function pricing()
{
    var title = "Cennik";
    var txt = "- CMS (120,00 zł)<br/ >- Profesjonalny Szablon (60,00 zł)<br />- Darmowy Szablon (00,00 zł)<br />- Zlecenie własne (Zależne od zlecenia)";
    
    eksport(title,txt);
    casb(2);
}
function contact()
{
    var title = "Kontakt";
    var txt = "E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski <a href=\"http://a.test10.besaba.com\">A.Test10</a><br />Cena: Do negocjacji";
    
    eksport(title,txt);
    casb(3);
}
function about()
{
    var title = "O Nas";
    var txt = "Gray Calm Theme jest szablonem stworzonym przez <a href=\"http://a.test10.besaba.com\">Vertigo Project</a>, bazującym na najnowszych rozwiązaniach i trendach w sieci oferujących nowoczesny wygląd strony.";
    
    eksport(title,txt);
    casb(4);
}
function awards()
{
    var title = "Nagrody";
    var txt = "- Nagroda #1<br />- Nagroda #2<br />- Nagroda #3<br />- Nagroda #4</br >- Nagroda #5";
    
    eksport(title,txt);
    casb(5);
}
function rules()
{
    var title = "Regulamin";
    var txt = "<p>§1 Regulamin <br /><br /> - Pkt 1.<br />- Pkt 2.<br />- Pkt 3.</p></p>§2 Ogólne zasady<br /><br />- Pkt 1. <br />- Pkt 2. <br />- Pkt 3.<br />- Pkt 4. <br />- Pkt 5. </p><p>§3 Prawa<br /><br />- Pkt 1. <br />- Pkt 2. <br />- Pkt 3. <br />- Pkt 4.</p>";
    
    eksport(title,txt);
    casb(6);
}
function privacypolicy()
{
    var title = "Polityka Prywatności";
    var txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis risus aliquet urna egestas mattis. Maecenas porttitor turpis a neque iaculis, viverra sagittis velit faucibus. Morbi ligula ante, aliquet nec lectus et, lacinia lobortis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod massa id lacus condimentum convallis. Phasellus sodales condimentum nisi, id cursus tellus luctus nec. Maecenas sed quam posuere, laoreet elit a, vulputate tortor. Suspendisse sed ante quis felis feugiat facilisis non a mi. Vestibulum libero velit, dapibus ac ultrices nec, bibendum et erat. Etiam in efficitur ex. Quisque posuere volutpat felis a dignissim.<br /><br />In quis odio vel est consectetur ullamcorper. Nullam posuere lorem nec purus congue viverra. Vivamus cursus finibus dolor, sit amet semper tellus tempus quis. Duis dapibus tellus enim, in vestibulum neque posuere non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec velit pulvinar, condimentum justo quis, finibus turpis. Donec gravida convallis nulla non porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pharetra, ligula sed posuere vehicula, neque metus gravida mauris, id aliquam purus mi id nunc. Aenean sagittis aliquet sem, sit amet vehicula urna blandit ut. Proin ultrices elementum risus. Nullam fringilla volutpat nunc id dictum. Aenean pretium bibendum bibendum. Nunc dapibus magna eget metus faucibus, in varius erat condimentum. Morbi viverra felis metus, id auctor enim pharetra eu.<br /><br />Quisque feugiat volutpat leo, sit amet fermentum arcu molestie sit amet. Aenean vehicula gravida nisi pretium interdum. Fusce quis tellus aliquet, accumsan lorem ac, aliquam ex. Pellentesque id lectus egestas, mattis lectus et, rhoncus enim. Praesent blandit imperdiet nisi a accumsan. Morbi eget lectus enim. Donec sed semper velit. Aliquam non consectetur magna.<br /><br />Aenean finibus ultricies molestie. Nunc turpis libero, condimentum vel finibus vel, ultricies non erat. Sed nisl velit, efficitur a est et, ullamcorper egestas ipsum. Vivamus gravida urna ut dolor blandit aliquet. Cras finibus risus a justo cursus, eu pulvinar velit mattis. In at euismod nibh. Etiam sed urna vel lorem condimentum cursus quis a risus. Nulla sit amet elementum elit. Pellentesque malesuada vel odio eu tempor. Ut volutpat maximus nisi, id vestibulum enim elementum ut.";
    
    eksport(title,txt);
    casb(7);
}
function loremipsum()
{
    var title = "Lorem Ipsum";
    var txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis risus aliquet urna egestas mattis. Maecenas porttitor turpis a neque iaculis, viverra sagittis velit faucibus. Morbi ligula ante, aliquet nec lectus et, lacinia lobortis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod massa id lacus condimentum convallis. Phasellus sodales condimentum nisi, id cursus tellus luctus nec. Maecenas sed quam posuere, laoreet elit a, vulputate tortor. Suspendisse sed ante quis felis feugiat facilisis non a mi. Vestibulum libero velit, dapibus ac ultrices nec, bibendum et erat. Etiam in efficitur ex. Quisque posuere volutpat felis a dignissim.<br /><br />In quis odio vel est consectetur ullamcorper. Nullam posuere lorem nec purus congue viverra. Vivamus cursus finibus dolor, sit amet semper tellus tempus quis. Duis dapibus tellus enim, in vestibulum neque posuere non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec velit pulvinar, condimentum justo quis, finibus turpis. Donec gravida convallis nulla non porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pharetra, ligula sed posuere vehicula, neque metus gravida mauris, id aliquam purus mi id nunc. Aenean sagittis aliquet sem, sit amet vehicula urna blandit ut. Proin ultrices elementum risus. Nullam fringilla volutpat nunc id dictum. Aenean pretium bibendum bibendum. Nunc dapibus magna eget metus faucibus, in varius erat condimentum. Morbi viverra felis metus, id auctor enim pharetra eu.<br /><br />Quisque feugiat volutpat leo, sit amet fermentum arcu molestie sit amet. Aenean vehicula gravida nisi pretium interdum. Fusce quis tellus aliquet, accumsan lorem ac, aliquam ex. Pellentesque id lectus egestas, mattis lectus et, rhoncus enim. Praesent blandit imperdiet nisi a accumsan. Morbi eget lectus enim. Donec sed semper velit. Aliquam non consectetur magna.<br /><br />Aenean finibus ultricies molestie. Nunc turpis libero, condimentum vel finibus vel, ultricies non erat. Sed nisl velit, efficitur a est et, ullamcorper egestas ipsum. Vivamus gravida urna ut dolor blandit aliquet. Cras finibus risus a justo cursus, eu pulvinar velit mattis. In at euismod nibh. Etiam sed urna vel lorem condimentum cursus quis a risus. Nulla sit amet elementum elit. Pellentesque malesuada vel odio eu tempor. Ut volutpat maximus nisi, id vestibulum enim elementum ut.<br /><br />Etiam mollis, turpis et porta scelerisque, urna justo ornare tortor, sed ultrices felis lacus eu orci. Fusce luctus diam quis dolor lacinia, at commodo neque suscipit. Sed vel venenatis ipsum, eu blandit orci. Morbi blandit laoreet dolor, ac sagittis odio mollis et. Etiam pharetra, tellus nec finibus egestas, enim dolor semper ligula, vel maximus nisi nibh dignissim tortor. Pellentesque sed metus eget dui tempus mollis vel ac nulla. Etiam id libero tortor. Vestibulum sagittis tempus orci nec euismod. Pellentesque eget arcu nisi. Sed imperdiet nibh id pellentesque vestibulum. Nullam cursus orci vitae justo viverra dictum. Curabitur pulvinar interdum tortor at pharetra. Pellentesque vel varius diam, in pharetra dolor.<br /><br />Vestibulum nec dignissim leo. Aliquam scelerisque semper libero, non placerat mi molestie ut. Sed in venenatis metus. Fusce non ex in eros semper ultrices. Phasellus pharetra malesuada nulla, id fermentum dui consequat vitae. Integer eu molestie dolor. Ut pharetra diam metus, nec accumsan purus placerat et. Donec quis neque at libero feugiat sollicitudin sit amet lacinia ex. Etiam vehicula quis nibh a rhoncus. Nulla tortor urna, faucibus vel mollis nec, tempus sit amet felis. Ut ac mauris interdum, ornare dolor sed, porttitor enim. Nulla efficitur, tellus ac finibus pharetra, arcu sapien dapibus tortor, non venenatis ligula libero sed dolor.<br />Integer aliquam quam sem, eu tempor tortor convallis a. Integer quam felis, porttitor sed sodales vitae, rutrum id lacus. Suspendisse tincidunt tortor ante, ac placerat felis placerat ut. Nulla elit felis, aliquet ut aliquet at, pretium a lorem. Nam malesuada aliquam erat bibendum consectetur. Pellentesque et mollis sem. Proin vitae posuere dui, ac egestas nisi. Proin non volutpat ipsum. Aliquam tincidunt aliquam sollicitudin.<br /><br />Mauris malesuada rutrum enim, quis mattis lacus tristique vel. Suspendisse nulla quam, fringilla a neque in, ultrices tincidunt est. Pellentesque congue felis dignissim interdum placerat. Quisque mattis in orci vitae semper. Nullam congue tortor hendrerit, rhoncus magna at, facilisis mi. Suspendisse ultrices dapibus interdum. Proin nisi mauris, placerat vel accumsan sed, pretium in massa. Vestibulum a nisi neque. Donec et turpis molestie, posuere arcu id, egestas nulla. Mauris congue est vitae libero convallis lacinia. Praesent facilisis, orci sed euismod volutpat, erat felis scelerisque nisl, eget vulputate lorem libero at dui. Praesent tincidunt fringilla semper. Duis vestibulum suscipit lorem et maximus. Maecenas volutpat iaculis molestie. Morbi vestibulum accumsan justo ut lobortis. Sed ac porta lorem.<br /><br />Curabitur in porta leo, a rutrum nisi. Morbi congue ullamcorper mauris, vitae dignissim purus ultrices sit amet. Sed id sem porttitor, congue est sed, laoreet orci. Donec quis quam enim. Nunc ornare nunc et ligula sodales, sit amet volutpat libero viverra. Sed auctor neque dui, at laoreet ipsum tincidunt non. Suspendisse tempus augue feugiat odio rutrum euismod.";
    
    eksport(title,txt);
    casb("cls");
}