function createTable() {
    //Write your code here

    let rowNum = prompt("Input number of rows");
    let colNum = prompt("Input number of columns");
    let table = document.getElementById("myTable");

    console.log(rowNum , colNum);

    for(let i =0;i<rowNum;i++){
        let row = table.insertRow();
        for(let j = 0;j<colNum;j++){
            let cell = row.insertCell();
            cell.innerText = `Row-${i} Column-${j}`;
        }
    }

}
