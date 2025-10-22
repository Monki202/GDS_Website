class GameObject
{
    constructor(canvas,OBJHeight,OBJWidth)
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.vx = 4.05;
        this.vy = 4.8;
        this.color = "black"
        this.canvas = canvas

    }

    renderRect()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    move()
    {
        this.x += this.vx
        this.y += this.vy

        if(this.x > this.canvas.width - 50 )
            {
                this.vx *= -1.02
            }
            
            if(this.y > this.canvas.height - 50)
            {
                this.vy *= -1.02
            }
        
            if(this.x<50)
            {
                this.vx *= -1.02
            }
        
            if(this.y<50)
            {
                this.vy *= -1.02
            }

            
    }

} 