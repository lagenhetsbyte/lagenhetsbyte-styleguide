var xhr= new XMLHttpRequest();
xhr.open('GET', 'partials/menu.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState !==4 ) return;
    if (this.status !==200 ) return;
    var nav = document.getElementById('#nav');
    nav.innerHTML = this.responseText;
};
xhr.send();