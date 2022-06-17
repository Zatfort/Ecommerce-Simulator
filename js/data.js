class libro{
    constructor(name,date,format,price,img,url,id,autor){
        
        this.name = name
        this.date = date
        this.format = format
        this.price = price
        this.img = img
        this.url = url
        this.id = id
        this.autor = autor
    }
}


const volumen1 = new libro("Berserk Volume 1","1 Dic 1990","Paperback",2.224,"../assets/images/Berserkimg.jpg","https://es.wikipedia.org/wiki/Berserk_(manga)","001","By Kentaro Miura",) 
const volumen2 = new libro("Berserk Volume 2","3 Mar 1991","Paperback",2.479,"../assets/images/Berserk2.jpg","https://es.wikipedia.org/wiki/Berserk_(manga)","002","By Kentaro Miura",)
const volumen3 = new libro("Berserk Volume 3","31 Oct 1991","Paperback",2.290,"../assets/images/Berserk3.jpg","https://es.wikipedia.org/wiki/Berserk_(manga)","003","By Kentaro Miura",)
const volumen4 = new libro("Berserk Volume 4","29 Feb 1992","Paperback",2.252,"../assets/images/Berserk4.jpg","https://es.wikipedia.org/wiki/Berserk_(manga)","004","By Kentaro Miura",)