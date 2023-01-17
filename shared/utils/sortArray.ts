 export const arrayObjSort = (data:any, property :string |undefined, order = 'asc') =>{
    if(property){
      return data.sort((a: any, b: any) => {
        var aName = setProperty(a[property]);
        var bName = setProperty(b[property]);
        if(order == "asc")
          return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        else
          return ((aName < bName) ? 1 : ((aName > bName) ? -1 : 0));
      });
    } else {
      return data;
    }

  }

  const setProperty = (property:string) => {
    if(typeof property === 'string'){
      property = property.toLowerCase();
    }
    return property;
  }

  // const objSortByKey = (data:any) => {
  //   var array = Object.keys(data)
  //   var obj = {};
  //   array = arraySort(array);
  //   array.forEach(ele => obj[ele] = data[ele])
  //
  //   return obj;
  // }

  export const objToArraySortByProperty =(data:any, property:string | undefined ) =>{
    var array = [];
    for (var e in data){
      array.push(data[e]);
    }
    data = arrayObjSort(array, property);

    return data;
  }

  export const arraySort = (data:any, order ='asc') => {
    return data.sort((a: any,b : any) => {
      if(a < b) return order == "asc"? -1: 1;
      if(a > b) return order == "asc"? 1: -1;
      return 0;
    });
  }
