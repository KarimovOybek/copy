// start intro

let header = document.querySelector('.header')
let headerNav = document.querySelector('.header__nav')
let canvas = document.querySelector('canvas')
let changeBtns = document.querySelector('.change__btns')

setTimeout(() => {
    header.style.opacity = '1'
}, 2000);
setTimeout(() => {
    colorController.style.opacity = '1'
}, 2000);
setTimeout(() => {
    headerNav.style.opacity = '1'
}, 2000);
setTimeout(() => {
    canvas.style.display = 'none'
}, 3000);
setTimeout(() => {
    changeBtns.style.opacity = '1'
}, 2000);

// end intro



let headerLogo = document.querySelector('.header__logo')

headerLogo.addEventListener('click', () => {
    location.reload()
})


let burgerMenu = document.querySelector('.burger__menu')
let menu = document.querySelector('.menu')
let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')
let link3 = document.querySelector('.link3')
let link4 = document.querySelector('.link4')
let navClose = document.querySelector('.nav__close')

burgerMenu.addEventListener('click', () => {
    setTimeout(() => {
        link1.style.transform = 'translate(0%)'
    }, 800);
    setTimeout(() => {
        link2.style.transform = 'translate(0%)'
    }, 900);
    setTimeout(() => {
        link3.style.transform = 'translate(0%)'
    }, 1000);
    setTimeout(() => {
        link4.style.transform = 'translate(0%)'
    }, 1100);
    burgerMenu.classList.add('burgerActive')
    setTimeout(() => {
        menu.style.right = '0'
    }, 300);
})

navClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burgerActive')
    setTimeout(() => {
        menu.style.right = '-100%'
    }, 1000);
    setTimeout(() => {
        link1.style.transform = 'translate(600%)'
    }, 1100);
    setTimeout(() => {
        link2.style.transform = 'translate(600%)'
    }, 1000);
    setTimeout(() => {
        link3.style.transform = 'translate(600%)'
    }, 900);
    setTimeout(() => {
        link4.style.transform = 'translate(600%)'
    }, 800);
})



// color btn start

let colorController = document.querySelector('.color__controller')
let controllerColors = document.querySelector('.controller__colors')
let close = document.querySelector('.close')

colorController.addEventListener('click', () => {
    colorController.style.left = '-100%'
    controllerColors.style.left = '0%'
})

close.addEventListener('click', () => {
    colorController.style.left = '0%'
    controllerColors.style.left = '-100%'
})

// color btn end



// box  link  start

let boxLink = document.querySelectorAll('.box__link')

for (let i = 0; i < boxLink.length; i++) {
    boxLink[i].addEventListener('click', () => {
        for (let j = 0; j < boxLink.length; j++) {
            boxLink[j].classList.remove('link__active')
        }
        boxLink[i].classList.add('link__active')
    })

}


// box  link  end

// buttons active start

let changerBtn = document.querySelectorAll('.changer__btn')

for (let k = 0; k < changerBtn.length; k++) {
    changerBtn[k].addEventListener('click', () => {
        for (let n = 0; n < changerBtn.length; n++) {
            changerBtn[n].classList.remove('actvieChanger')
        }
        changerBtn[k].classList.add('actvieChanger')
    })

}


// buttons active end




// colors change start

let colors = document.querySelectorAll('.colors')
let reset = document.querySelector('.reset')
let headerPreTitle = document.querySelector('.headerPre__title span')
let buttons = document.querySelectorAll('.buttons button')
let contactLink = document.querySelectorAll('.contact__link')
let contactItem = document.querySelectorAll('.contact__list li')
let contactIcon = document.querySelectorAll('.contact__icon')
let contactInpunt = document.querySelectorAll('.contact__inpunt')
let contactTitleSpan = document.querySelector('.contact__title span')
let worksTitleSpan = document.querySelector('.works__title span')
let contactBtns = document.querySelector('.contact__btns ')
let messageInput = document.querySelector('.message__input ')
// let linkActive  = document.querySelectorAll('.box__link')


colors.forEach(color => {
    color.addEventListener('click', () => {
        let change = color.getAttribute('data-color')
        headerPreTitle.style.color = `${change}`
        contactTitleSpan.style.color = `${change}`
        contactBtns.style.background = `${change}`
        messageInput.style.background = `${change}`
        worksTitleSpan.style.color = `${change}`
        buttons.forEach(button => {
            button.style.background = `${change}`
        });
        contactInpunt.forEach(contactInpunts => {
            contactInpunts.style.background = `${change}`
        });
        contactItem.forEach(contactItems => {
            contactItems.style.background = `${change}`
        });
        contactIcon.forEach(contactIcons => {
            contactIcons.style.color = `${change}`
        });
        contactLink.forEach(contactLinks => {
            contactLinks.style.color = `${change}`
        });
        changerBtn.forEach(changerBtns => {
            changerBtns.style.background = `${change}`
        });
        // linkActive.forEach(linkActives => {
        //     let linkActivesAttr = linkActives.getAttribute('class')
        //     if (linkActivesAttr == 'box__link link__active') {
        //         linkActives.style.color = `${change}`                
        //     }
        // });

    })
});

reset.addEventListener('click', () => {
    location.reload()
})

// colors change end

// clock start

let hour = document.querySelector('.seconds')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.hours')

function clock() {

    const data = new Date()

    hour.innerHTML = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
    minute.innerHTML = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
    second.innerHTML = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()

    setTimeout(() => {
        clock()
    }, 1000);

}

clock()

// clock end



// runner start


let skillRunner = document.querySelector('.runnerHtml')
let runnerLine = document.querySelector('.lineHtml span')




let x = 0

function run() {

    x++
    skillRunner.innerHTML = `${x}%`

    dataRun = skillRunner.getAttribute('data-run')

    let runOf = setTimeout(() => {
        run()
    }, 100);

    if (skillRunner.innerHTML == dataRun) {
        clearTimeout(runOf)
    }

    runnerLine.style.width = `${x}%`
}





let runnerCss = document.querySelector('.runnerCss')
let lineCss = document.querySelector('.lineCss span')

let z = 0

function run1() {
    z++
    runnerCss.innerHTML = `${z}%`

    dataRun1 = runnerCss.getAttribute('data-run1')

    let runOff = setTimeout(() => {
        run1()
    }, 100);

    if (runnerCss.innerHTML == dataRun1) {
        clearTimeout(runOff)
    }

    lineCss.style.width = `${z}%`
}


let runnerJs = document.querySelector('.runnerJs')
let lineJs = document.querySelector('.lineJs span')

let y = 0

function run2() {
    y++
    runnerJs.innerHTML = `${y}%`

    dataRun2 = runnerJs.getAttribute('data-run2')

    let runOff1 = setTimeout(() => {
        run2()
    }, 100);

    if (runnerJs.innerHTML == dataRun2) {
        clearTimeout(runOff1)
    }

    lineJs.style.width = `${y}%`
}

let runnerPhp = document.querySelector('.runnerPhp')
let phpLine = document.querySelector('.phpLine span')

let t = 0

function run3() {
    t++
    runnerPhp.innerHTML = `${t}%`

    dataRun3 = runnerPhp.getAttribute('data-run3')

    let runOff2 = setTimeout(() => {
        run3()
    }, 100);

    if (runnerPhp.innerHTML == dataRun3) {
        clearTimeout(runOff2)
    }

    phpLine.style.width = `${t}%`
}

run()
run1()
run2()
run3()

// runner end



// page  changes start

let aboutBtn = document.querySelectorAll('.about__btn')
let homeBtn = document.querySelectorAll('.home__btn')
let worksBtn = document.querySelectorAll('.works__btn')
let contactBtn = document.querySelectorAll('.contact__btn')
let about = document.querySelector('.about')
let works = document.querySelector('.works')
let headerTitle = document.querySelector('.header__title')
let headerPreTitles = document.querySelector('.headerPre__title')
let worksTitle = document.querySelector('.works__title')
let contact = document.querySelector('.contact')
let contactTitle = document.querySelector('.contact__title')

aboutBtn.forEach(aboutBtns => {
    aboutBtns.addEventListener('click', () => {
        headerTitle.style.transform = 'translateY(-100%)'
        headerPreTitles.style.transform = 'translateY(-100%)'
        setTimeout(() => {
            header.style.transform = 'rotate(90deg)'
            about.style.transform = 'translateY(-100%)  rotate(360deg)'
            works.style.zIndex = '-2'
            works.style.transform = 'translateY(-200%) scale(0)'
        }, 300);
        worksTitle.classList.remove('active__title')
        contact.style.left = '-100%'
        contactTitle.classList.remove('activeContact')
        menu.style.right = '-100%'
        burgerMenu.classList.remove('burgerActive')


    })
});

homeBtn.forEach(homeBtns => {
    homeBtns.addEventListener('click', () => {
        header.style.transform = 'rotate(0deg)'
        about.style.transform = 'translateY(-200%)  rotate(-360deg)'
        works.style.zIndex = '-2'
        works.style.transform = 'translateY(-200%) scale(0)'
        setTimeout(() => {
            headerTitle.style.transform = 'translateY(0%)'
        }, 300);
        setTimeout(() => {
            headerPreTitles.style.transform = 'translateY(0%)'
        }, 300);
        worksTitle.classList.remove('active__title')
        contact.style.left = '-100%'

        contactTitle.classList.remove('activeContact')
        menu.style.right = '-100%'
        burgerMenu.classList.remove('burgerActive')

    })
});

worksBtn.forEach(worksBtns => {
    worksBtns.addEventListener('click', () => {
        setTimeout(() => {
            header.style.transform = 'rotate(90deg)'
            about.style.transform = 'translateY(-200%)  rotate(-360deg)'
            works.style.zIndex = '-1'
            works.style.transform = 'translateY(-200%) scale(1)'
        }, 300);
        headerTitle.style.transform = 'translateY(-100%)'
        headerPreTitles.style.transform = 'translateY(-100%)'
        setTimeout(() => {
            worksTitle.classList.add('active__title')
        }, 1200);
        contact.style.left = '-100%'
        contactTitle.classList.remove('activeContact')
        menu.style.right = '-100%'
        burgerMenu.classList.remove('burgerActive')
    })
});

contactBtn.forEach(contactBtns => {
    contactBtns.addEventListener('click', () => {

        contact.style.left = '0%'
        works.style.zIndex = '-2'
        works.style.transform = 'translateY(-200%) scale(0)'
        header.style.transform = 'rotate(90deg)'
        about.style.transform = 'translateY(-200%)  rotate(-360deg)'
        setTimeout(() => {
            contactTitle.classList.add('activeContact')
        }, 1200);
        menu.style.right = '-100%'
        burgerMenu.classList.remove('burgerActive')
    })
});



// page  changes end

