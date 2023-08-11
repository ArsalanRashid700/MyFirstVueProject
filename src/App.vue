
<template>
  
     <router-view/>
   
</template>
<script >


export default { 
  name:'App',
   
}

</script>
<style>
#app{
  font-family: avenir, Helvetica, sans-serif;
 text-align: center;
 color: #2c3e50;

}
body{
  padding:0;
  margin:0;
}
.register input,.login input,.add input  {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.register button,.login button,.add button{
  width: 320px;
  height: 40px;
  
  border: 1px solid skyblue;
  color:white;

  margin-left: auto;
  margin-right: auto;
  background-color: skyblue;
  cursor: pointer;
  display: block;
}
.nav{
  background-color: #333;
  overflow: hidden;
 
}
.nav a{
  float: left;
  color:white;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 16;
  margin-right: 4px;
}

.nav a:hover{
  background-color:#ddd ;
  color: #222;

}
.logo{
  
  width: 100px;
}





</style>


