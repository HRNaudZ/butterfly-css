////INPUT TYPE=all
(function(){
    var inputs = document.querySelectorAll("input");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.setAttribute("placeholder", label.textContent);
        }
        var placeholder = input.getAttribute("placeholder");
        input.addEventListener('focus', function(){
            if(label!=null)
                input.parentElement.insertBefore(label, input);
            input.setAttribute("placeholder", "");
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(label!=null){
                label.parentElement.removeChild(label);
            }
            input.setAttribute("placeholder", placeholder);
            input.style.borderBottomWidth="1px";
        });

    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////INPUT TYPE=BUTTON
(function(){
    var inputs = document.querySelectorAll("input[type=button]");
    var effect = function(input){
        input.className="btn bg-red white";
    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////INPUT TYPE=FILE
(function(){
    var inputs = document.querySelectorAll("input[type=file]");
    var effect = function(input){
    var bt = document.createElement('a');
    var file_name = document.createElement('span');
    bt.className="btn bg-red white large";
    bt.textContent = input.getAttribute("value");
    bt.style.marginTop="5px";
    file_name.className="file-name";
    file_name.textContent="No file chosen";
    file_name.style.marginLeft="10px";
    file_name.style.width="auto";
    input.parentElement.insertBefore(file_name, input);
    input.parentElement.insertBefore(bt, file_name);
    bt.addEventListener('click', function(){
        input.click();
    });
    input.addEventListener('input', function(){
        if(input.files[0]!=undefined)
            file_name.textContent = input.files[0].name;
        else
            file_name.textContent="No file chosen";
    });
    input.form.querySelector('input[type=submit]').addEventListener('click', function(event){
        if(input.required){
            if(input.files[0]==undefined){
                file_name.style.color="red";
                file_name.style.fontSize="1.2em";
                event.preventDefault();
            }
        }
    });
}
inputs.forEach(inp=>{
    effect(inp);
});
})();

/// Button Animations
(function(){
    var btns = document.querySelectorAll(".btn");
    var effect = function(btn){
        btn.addEventListener('click', function(){
            btn.style.opacity="0.6";
            btn.style.outline="none";
            window.setTimeout(() => {
                btn.style.opacity="0.8";
            }, 300);
        });
        btn.addEventListener('mouseout', function(){
            btn.style.opacity="1";
        });
        btn.addEventListener('mouseover', function(){
            btn.style.opacity="0.8";
        });
    }
    btns.forEach(btn =>{
        effect(btn);
    });
})();

////INPUT TYPE=TEXT
(function(){
    var inputs = document.querySelectorAll("input[type=text]");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.setAttribute("placeholder", label.textContent);
        }
        var placeholder = input.getAttribute("placeholder");
        input.addEventListener('focus', function(){
            if(label!=null)
                input.parentElement.insertBefore(label, input);
            input.setAttribute("placeholder", "");
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(label!=null){
                label.parentElement.removeChild(label);
            }
            input.setAttribute("placeholder", placeholder);     
            input.style.borderBottomWidth="1px";
        });
    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////INPUT TYPE=PASSWORD
(function(){
    var inputs = document.querySelectorAll("input[type=password]");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.setAttribute("placeholder", label.textContent);
        }
        var placeholder = input.getAttribute("placeholder");
        input.addEventListener('focus', function(){
            if(label!=null)
                input.parentElement.insertBefore(label, input);
            input.setAttribute("placeholder", "");
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(label!=null){
                label.parentElement.removeChild(label);
            }
            input.setAttribute("placeholder", placeholder);
            input.style.borderBottomWidth="1px";
        });

    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////TEXTAREA
(function(){
    var inputs = document.querySelectorAll("textarea");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.textContent = label.textContent;
        }
        var placeholder = input.textContent;
        input.addEventListener('focus', function(){
            input.textContent = "";
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(input.textContent=="")
                input.textContent = label.textContent;
            input.style.borderBottomWidth="1px";
        });

    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////INPUT TYPE=CHECKBOX
(function(){
    var inputs = document.querySelectorAll("input[type=checkbox]");
    var effect = function(ckb){
        var sp = document.createElement("span");
        sp.className = "fake-checkbox";
        if(ckb.checked)
            sp.classList.add("fake-checkbox-checked");
        ckb.parentElement.insertBefore(sp, ckb);
        sp.addEventListener('click', function(){
                ckb.checked=!ckb.checked;
            sp.classList.toggle('fake-checkbox-checked');
        });
    }
    inputs.forEach(ckb=>{
        effect(ckb);
    });
})();

////INPUT TYPE=RADIO
(function(){
    var inputs = document.querySelectorAll("input[type=radio]");
    var effect = function(ckb){
        var sp = document.createElement("span");
        sp.className = "fake-radio";
        if(ckb.checked)
            sp.classList.add("fake-radio-checked");
        ckb.parentElement.insertBefore(sp, ckb);
        sp.addEventListener('click', function(){
            if(!ckb.checked){
                ckb.checked=!ckb.checked;
                sp.classList.add('fake-radio-checked');
            }
        });
        document.addEventListener('click', function(event){
            if(event.target.tagName!="SPAN")
                return;
            if(!ckb.checked){
                sp.classList.remove('fake-radio-checked');
            }
        });
        ckb.addEventListener('cuechange', function(){
            sp.classList.toggle('fake-radio-checked');
        });
    }
    inputs.forEach(ckb=>{
        effect(ckb);
    });
})();

////INPUT TYPE=DATE
(function(){
    var inputs = document.querySelectorAll("input[type=date]");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.setAttribute("placeholder", label.textContent);
        }
        var placeholder = input.getAttribute("placeholder");
        input.addEventListener('focus', function(){
            if(label!=null)
                input.parentElement.insertBefore(label, input);
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(label!=null){
                label.parentElement.removeChild(label);
            }
            input.setAttribute("placeholder", placeholder);     
            input.style.borderBottomWidth="1px";
        });
        input.addEventListener("mouseover", function(){
            input.focus();
        });
    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////INPUT TYPE=EMAIL
(function(){
    var inputs = document.querySelectorAll("input[type=email]");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.setAttribute("placeholder", label.textContent);
        }
        var placeholder = input.getAttribute("placeholder");
        input.addEventListener('focus', function(){
            if(label!=null)
                input.parentElement.insertBefore(label, input);
            input.setAttribute("placeholder", "");
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(label!=null){
                label.parentElement.removeChild(label);
            }
            input.setAttribute("placeholder", placeholder);
            input.style.borderBottomWidth="1px";
        });

    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

////INPUT TYPE=TEL
(function(){
    var inputs = document.querySelectorAll("input[type=tel]");
    var effect = function(input){
        var label = document.getElementById(input.getAttribute("label"));
        if(label!=null){
            label.parentElement.removeChild(label);
            input.setAttribute("placeholder", label.textContent);
        }
        var placeholder = input.getAttribute("placeholder");
        input.addEventListener('focus', function(){
            if(label!=null)
                input.parentElement.insertBefore(label, input);
            input.setAttribute("placeholder", "");
            input.style.borderBottomWidth="2px";
        });
        input.addEventListener('blur', function(){
            if(label!=null){
                label.parentElement.removeChild(label);
            }
            input.setAttribute("placeholder", placeholder);
            input.style.borderBottomWidth="1px";
        });

    }
    inputs.forEach(input =>{
        effect(input);
    });
})();

//Navbar
(function(){
    var vgrid = document.querySelector(".grid");
    var grid = document.createElement("div");
    var navbar = document.querySelector(".navbar");
    var as = navbar.querySelectorAll("a");
    var lo = navbar.querySelector(".logo");
    var navul = document.createElement("ul");
    var br = document.createElement("li");

    grid.className="grid";
    var p1 = document.createElement('p');
    p1.className="g bg-white";
    var p2 = document.createElement('p');
    p2.className="g transparent";
    
    grid.appendChild(p1.cloneNode(true));
    grid.appendChild(p2.cloneNode(true));
    grid.appendChild(p1.cloneNode(true));
    grid.appendChild(p2.cloneNode(true));
    grid.appendChild(p1.cloneNode(true)); 
    vgrid.parentElement.replaceChild(grid, vgrid);
    
    grid.style.display="none";
    grid.style.float="left";
    br.style.paddingTop="10px";
    
    //navul.appendChild(br);
    for(var i=0; i<as.length; i++){
            as[i].className="navbar-a";
            if(as[i]!=lo){
                let li = document.createElement("li");
                li.appendChild(as[i].cloneNode(true));
                navul.appendChild(li);
            }
    }
    
    navul.style.marginTop="2px";
    navbar.style.backgroundColor = as[0].style.backgroundColor;
    
    lo.classList.add("navbar-logo");
    if(navbar.classList.contains("fixed")){
        var next =navbar.nextElementSibling;
        while(next!=undefined && next.tagName == "BR")
            next = next.nextElementSibling
        if(next!=undefined)
            next.style.marginTop="40px";
    }
    
    window.onresize=function(){
        if(window.innerWidth<=830){
            for(var i=0; i<as.length; i++)
                if(as[i]!=lo)
                    as[i].style.display="none";
            lo.style.float="none";
            lo.parentElement.style.textAlign="center";
            lo.parentElement.style.position="relative";
            navul.style.listStyle="none";
            navbar.appendChild(navul);
            navul.style.backgroundColor = "inherit";
            navul.classList.add("at-center");
            navul.style.display="none";
            var next =navbar.nextElementSibling;
            while(next!=undefined && next.tagName == "BR")
                next = next.nextElementSibling
            if(next!=undefined)
                next.style.marginTop="0px";
            grid.style.display="inline-block";
            
        }else{
            for(var i=0; i<as.length; i++)
                as[i].style.display="initial";
            lo.style.float="left";
            lo.parentElement.style.textAlign="right";
            if(navbar.classList.contains("fixed"))
                lo.parentElement.style.position="fixed";
            if(navbar.classList.contains("fixed")){
                var next =navbar.nextElementSibling;
                while(next!=undefined && next.tagName == "BR")
                    next = next.nextElementSibling
                if(next!=undefined)
                    next.style.marginTop="40px";
                grid.style.display="none";
            }
        }
    }
    grid.addEventListener('click', function(event){
        window.setTimeout(function(){
            if(navul.style.display=="none")
                navul.style.display="block";
            else if(navul.style.display=="block"){
                navul.style.display="none";
            }
        }, 200);
        event.stopPropagation;
    });
    document.addEventListener('click', function(event){
        if(event.target.classList.contains("grid") || event.target.classList.contains("g"))
            return;
         if(navul.style.display=="block"){
             navul.style.display="none";
        }
        event.stopPropagation;
    });

    if(window.innerWidth<=830){
        for(var i=0; i<as.length; i++)
            if(as[i]!=lo)
                as[i].style.display="none";
        lo.style.float="none";
        lo.parentElement.style.textAlign="center";
        lo.parentElement.style.position="relative";
        navul.style.listStyle="none";
        navbar.appendChild(navul);
        navul.style.backgroundColor = "inherit";
        navul.classList.add("at-center");
        navul.style.display="none";
        var next =navbar.nextElementSibling;
        while(next!=undefined && next.tagName == "BR")
            next = next.nextElementSibling
        if(next!=undefined)
            next.style.marginTop="0px";
        grid.style.display="inline-block";      
    }
})();

//Messages
 var msgs = document.querySelectorAll('.msg.mx');

 msgs.forEach(msg =>{
    var x = document.createElement("span");
    x.innerText="x";
    x.className="x-close";
    msg.appendChild(x);
    x.addEventListener('click', function(){
        msg.style.transition = "0.5s";
        msg.style.opacity = "0";
        window.setTimeout(function(){
            msg.parentElement.removeChild(msg);
        }, 500);
    })
 });