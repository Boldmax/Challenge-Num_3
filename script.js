var entry=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<entry.length; i++)
{
        for (var j=i; j<entry.length; j++)
        {
                if (entry[i] == entry[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = entry[i];
                }
        }
        m=0;
}

function keys(){
    alert(item+" ( " +mf +" times ) ");
}
alert(item+" ( " +mf +" times ) ");