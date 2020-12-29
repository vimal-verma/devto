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
    
        console.log(objectOfStrings);
    
        let arrayOfOccurrences=Object.values(objectOfStrings).sort((a,b)=>{return b-a});
        
    
        console.log(arrayOfOccurrences);
    
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
    
        console.log(maxOccurredStrs);
        return maxOccurredStrs
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        // console.log(color)
        return color;
      }

    render() {
        var arr = this.props.article.map(tag =>{
            return tag.tag_list.map(ta =>{
                return ta
            }
            )
        })
        var newArray = Array.prototype.concat.apply([], arr);
        console.log(newArray)
        var tagused = this.maxNumberOfStrings(newArray)
        console.log(tagused)
        var tags = tagused.map(tag =>{return tag.name})
        var tagsCount = tagused.map(tag =>{return tag.count})
        var tagcol = tagused.map(()=> {return this.getRandomColor()})
        console.log(tags)
        console.log(tagsCount)
        console.log(tagcol)
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
            </div>
        )            
    }
}
export default Tag