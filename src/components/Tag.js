import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';


class Tag extends Component {


    maxNumberOfStrings(arr) {

        let objectOfStrings = {};
    
        arr.forEach((str)=>{
            if(objectOfStrings.hasOwnProperty(str)){
                objectOfStrings[str]++;
            }else{
                objectOfStrings[str]=1;
            }
        })
    
        // console.log(objectOfStrings);
    
        let arrayOfOccurrences=Object.values(objectOfStrings).sort((a,b)=>{return b-a});
        
    
        // console.log(arrayOfOccurrences);
    
        let maxOccurredStrs=[];
    
        arrayOfOccurrences.forEach((occurred)=>{
    
            for(let str in objectOfStrings){
                if(objectOfStrings[str]===occurred){
                    maxOccurredStrs.push({
                        name:str,
                        count:objectOfStrings[str]
                    })
                objectOfStrings[str]=-1;
                    
                }
            }
        })
    
        // console.log(maxOccurredStrs);
        return maxOccurredStrs
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        // // console.log(color)
        return color;
      }

    render() {
        var numoftag =0
        var numofLikes= 0
        var numofComments= 0
        var arr = this.props.article.map(art =>{
            return art.tag_list.map(ta =>{
                numoftag++;
                return ta
            }
            )
        })
        this.props.article.forEach(article =>{
            numofLikes = numofLikes + article.public_reactions_count
            numofComments = numofComments + article.comments_count
        }
        )
        // console.log(numofComments, numofLikes, numoftag)
        var newArray = Array.prototype.concat.apply([], arr);
        // console.log(newArray)
        var tagused = this.maxNumberOfStrings(newArray)
        // console.log(tagused)
        var tags = tagused.map(tag =>{return tag.name})
        var tagsCount = tagused.map(tag =>{return tag.count})
        var tagcol = tagused.map(()=> {return this.getRandomColor()})
        // console.log(tags)
        // console.log(tagsCount)
        // console.log(tagcol)
        var articlesLenth = this.props.article.length
        // console.log(articlesLenth)
        // console.log(tags[0])
        // console.log(this.props.isUser)
        if(this.props.isUser){
        var user = this.props.article[0].user.name
        }else{
            user = this.props.article[0].organization.name
        }
        return (
            <div>
            <h1>Tags Used in articles</h1>
            <Pie
            data ={{
                datasets: [{
                data: tagsCount,
                backgroundColor: tagcol
                }],
                labels: tags
            }}
            />
            <h1>Some Statistics</h1>
            <div className="devusers">
               <div className="devuser">
                    <h1>{user} is using {tags[0]} Tag in {Math.round(Number(tagsCount[0])/Number(articlesLenth)*100*100)/100}% articles</h1>
                </div>
                <div className="devuser">
                    <h1>{user} is using {tags[1]} Tag in {Math.round(Number(tagsCount[1])/Number(articlesLenth)*100*100)/100}% articles</h1>
                </div>
                <div className="devuser">
                    <h1>{user} is using {tags[2]} Tag in {Math.round(Number(tagsCount[2])/Number(articlesLenth)*100*100)/100}% articles</h1>
                </div>
                <div className="devuser">
                    <h1>{user} is using Total {tags.length} Differents Tags in {articlesLenth} articles</h1>
                </div>
                <div className="devuser">
                    <h1>{user} is using {numoftag} Tags in {articlesLenth} articles</h1>
                </div>
                <div className="devuser">
                    <h1>{user}'s articles got Total {numofLikes} Reactions in {articlesLenth} articles</h1>
                </div>
                <div className="devuser">
                    <h1>{user}'s articles received Total {numofComments} comments in {articlesLenth} articles</h1>
                </div>
            </div>
            </div>
        )            
    }
}
export default Tag