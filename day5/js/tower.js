function createTower() {

    const tower = {

    };
    return tower;
}

function createEnemy() {

    const enemy = {
        health: 3,
        element: document.createElement('div'),
        readHealth() {
            console.log(this, this.health);
            return this.health;
        },
        createElement() {
            this.element.innerHTML = 'enemy';
            document.body.appendChild(this.element);
            this.element.style.position = 'absoute';
            this.element.style.left = 0;
            // setInterval( () => {
            //     this.move()
            // }, 2000 );
        },
        move() {
            console.log(this.getLeft())
            this.element.style.left = (parseInt(this.getLeft()) + 20) + 'px';
        },
        getLeft() {
            return this.element.style.left;
        }


    };
    return enemy;
}

const enemy1 = createEnemy();
enemy1.readHealth();
enemy1.createElement();
enemy1. move();
     
enemy1.move();
enemy1.move();
enemy1.move();