<style scoped>
    .login-box{
        padding-top: 200px;
    }
    .title{
        text-align: center;
        font-size: 18px;
        letter-spacing: 15px;
        font-weight: bolder;
    }
</style>
<template>
  <div>
     <Row class="login-box">
        <Col span="6" offset="9">
            <Card>
                <p slot="title" class="title">登录</p>
                <Form :model="loginForm" label-position="right" :label-width="60">
                    <Form-item label="用户名">
                        <Input v-model="loginForm.username">
                            <Icon type="ios-person-outline" slot="prepend" size="18"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item label="密  码">
                        <Input v-model="loginForm.password" type="password">
                            <Icon type="md-lock" slot="prepend"  size="18"></Icon>
                        </Input>
                    </Form-item>
                </Form>
                <Button type="success" long @click="login">登陆</Button>
            </Card>
        </Col>
    </Row>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login:function(){
                this.request.post({
                    url:'/api/login',
                    data:this.loginForm
                }).
                then((res)=>{
                    if(res.data.returnCode==1){
                        localStorage._login_token=res.data.data;
                        this.$router.push("/admin/")
                    }else{
                        this.$Message.error("登录失败");
                    }
                });
            }
        }
    };
</script>
