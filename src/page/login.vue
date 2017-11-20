<template>
  <div class="bc" >
    
    <el-form class="form" >
        <p class="title">后台登录</p>
        <el-form-item  prop="username" >
            <el-input type="text" placeholder="Administrator"></el-input>
        </el-form-item>
        <el-form-item  prop="password" >
            <el-input type="password" placeholder="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit_btn">Log in</el-button>
        </el-form-item>
        
    </el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bc {
    width: 100%;height:100%;
    position: relative;overflow: hidden;
}
.title {
    font-size: 30px;font-weight: bolder; color: lightslategrey;
    text-align: center;margin-bottom: 10px;
}
.submit_btn{
    width: 100%;
    font-size: 16px;
}
.form {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%,-50%);
    width: 370px; 
    padding: 20px;
    border: 1px solid #ddd;
}
</style>
