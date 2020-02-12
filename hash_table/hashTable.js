class HashTable{

    constructor(){
        this.table = new Array(137);
        this.values = [];
    }

    hash(string){
        const H = 37 ;
        let total = 0;
        for( let i = 0 ; i < string.length ; i++ ){
            total += total * H + string.charCodeAt(i) ;
        }
        total = total % this.table.length -1 ;
        return parseInt( total ) ;
    }

    showAll(){
        for( const key in this.table ){
            if( this.table[key] !== 'undefined' ){
                console.log( key + ' : ' + this.table[key] ) ;
            }
        }
    }

    put( data ){
        let key = this.hash( data ) ;
        this.table[key] = data ;
    }

    get(data){
        return this.table[this.hash(data)] ;
    }
}



class HashTableChain extends HashTable{

    constructor(){
        super();
        this.buildChains();
    }

    buildChains(){
        for( let i = 0 ; i < this.table.length; i++ ){
            this.table[i] = new Array();
        }
    }

    showAll(){
        for( const key in this.table ){
            if( this.table[key][0] !== undefined ){
                console.log( key + " : " + this.table[key][0] ) ;
            }
        }
    }

    put(key, data) {
        const pos = this.hash(key);
        let index = 0;
        if(this.table[pos][index] === undefined) {
          this.table[pos][index] = data;
        } else {
          ++index;
          while (this.table[pos][index] !== undefined ) {
            index++;
          }
          this.table[pos][index] = data;
        }
      }


    get(key) {
        const pos = this.hash(key);
        let index = 0;

        console.log( key + " : " + this.table[pos][index] ) ;

        while (this.table[pos][index] != key) {
          if(this.table[pos][index] !== undefined) {
            return this.table[pos][index]
          } else {
            return undefined;
          }
          index++;
        }
      }

}


let hashTable = new HashTableChain();
hashTable.put( "1", "Yehuda" ) ;
hashTable.put( "2", "Moche" ) ;
hashTable.put( "3", "Israel" ) ;
hashTable.put( "4", "Meir" ) ;
hashTable.put( "5", "Annaelle" ) ;

// hashTable.showAll();

console.log( hashTable.get("1") ) ;