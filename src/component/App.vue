<template>
    <div>
        <router-view></router-view>
        </div>
        
    </div>
    
    
</template>
 
<script>
    export default {
        created () {
            // console.log(this);
        },
          data() {
                    return {
                        value1: 2,
                        value2: null
                    }
                }
    }
</script>
<style scoped>
    div {
        height: 100%;
        width: 100%;
        background: skyblue;
    }
</style>