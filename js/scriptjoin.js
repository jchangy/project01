let $idArea=document.getElementById('idArea');
let $idMes=document.getElementById('idMes');
let $pwArea=document.getElementById('pwArea');
let $pwMes=document.getElementById('pwMes');
let $pwArea1=document.getElementById('pwArea1');
let $pwMes1=document.getElementById('pwMes1');
let $name=document.getElementById('name');
let $nameMes=document.getElementById('nameMes');
let $phone=document.getElementById('phone');
let $phMes=document.getElementById('phMes');
let $email=document.getElementById('email');
let $eMes=document.getElementById('eMes');
let $born=document.getElementById('born');
let $bMes=document.getElementById('bMes');
let $gMes=document.getElementById('gMes');

let regid=/^[a-zA-Z0-9]{4,}$/;
let regPw=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,12}$/;
let regName=/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/
let regPhone=/^(010)([0-9]{3,4})([0-9]{4})$/;
let regEmail=/^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/g;
let regBorm=/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;


$idArea.addEventListener('blur', function(){
    if(!regid.test($idArea.value)){
        $idMes.innerHTML="아이디는 영문자인 대소문자, 숫자 포함 4글자 이상만 가능";
        $idMes.style.color='red';
    }else{
        $idMes.innerHTML=`"사용 가능한 아이디입니다."`;
        $idMes.style.color='green';
    }
});
$pwArea.addEventListener('blur', function(){
    if(!regPw.test($pwArea.value)){
        $pwMes.innerHTML="영문,숫자,특수문자의조합으로 이루어진 8자 이상 12자 이하의 문자열만 가능";
        $pwMes.style.color='red';
    }else{
        $pwMes.innerHTML="사용 가능한 패스워드 입니다.";
        $pwMes.style.color='green';
    }
});

$pwArea1.addEventListener('blur',function(){
    if(($pwArea.value==$pwArea1.value) && (!$pwArea1.value=='')){
        $pwMes1.innerHTML='비밀번호가 일치합니다.';
        $pwMes1.style.color='green';
    }else{
        if(($pwArea.value=="") || ($pwArea1.value=="")){
            $pwArea.focus();
            $pwArea1.value="";
        }else{
            $pwMes1.innerHTML='비밀번호 다시 입력해주세요';
            $pwMes1.style.color='red';
            $pwArea1.value="";
            $pwArea1.focus();
        }
    }
})

$name.addEventListener('blur', function(){
    if(!regName.test($name.value)){
        $nameMes.innerHTML="이름을 입력해 주세요";
        $nameMes.style.color='red';
        $name.value='';
        $name.focus();
    }else{
        $nameMes.innerHTML="";
    }
});

$phone.addEventListener('blur',function(){
    if(regPhone.test($phone.value)){
        $phMes.innerHTML="";
    }else{
        if($phone.value==""){
            $phMes.innerHTML="전화번호를 입력해주세요";
            $phMes.style.color='red';
            $phone.focus();
        }else{
            $phMes.innerHTML="전화번호를 정확하게 입력해주세요";
            $phMes.style.color='red';
            $phone.value='';
            $phone.focus();
        }
    }
})

$email.addEventListener('blur', function(){
    if(regEmail.test($email.value)){
        $eMes.innerHTML="";
    }else{
        if($email.value==""){
            $eMes.innerHTML="이메일을 입력해주세요";
            $eMes.style.color='red';
            $email.focus();
        }else{
            $eMes.innerHTML="이메일을 정확하게 입력해주세요";
            $eMes.style.color='red';
            $email.value='';
            $email.focus();
        }
    }
});

//생년월일
$born.addEventListener('blur' ,function(){
    if(regBorn.test($born.value)){
        $bMes.innerHTML="";
    }else{
        if($born.value==""){
            $bMes.innerHTML="생년월일을 입력하세요.";
            $bMes.style.color='red';
            $born.focus();
        }else{
            $bMes.innerHTML="생년월일을 정확하게 입력하세요.";
            $bMes.style.color='red';
            $born.value='';
            $born.focus();
        }
    }
});

document.getElementById('submit').onclick=function(){
    if($idArea.value==""){
        alert('아이디를 입력하세요');
        return false;
    }else{
        if(!regid.test($idArea.value)){
            alert('아이디는 대문자, 소문자, 숫자 포함 4글자 이상만 가능')
            $idArea.value="";
            return false;
        }else{
            if($pwArea.value==""){
                alert('비밀번호를 입력하세요');
                return false;
            }else{
                if($pwArea.value !== $pwArea1.value){
                    alert('비밀번호가 일치하지 않음')
                    return false;
                }else{
                    if($name.value==""){
                        alert('이름을 입력해주세요')
                        return false;
                    }else{
                        if($phone.valuee==""){
                            alert('전화번호를 입력해주세요.')
                            return false;
                        }else{
                            if($email.value==""){
                                alert('이메일을 입력해주세요.')
                                return false;
                            }else{
                                if($born.value==""){
                                    alert('생년월일을 입력해주세요.')
                                    return false;
                                }else{
                                    if(document.querySelector('[name=gender]:checked')==null){
                                        $gMes.style.color='red';
                                        $gMes.innerHTML="성별을 체크해주세요";
                                        document.getElementById('female').checked=false();
                                        return false;
                                    }else{
                                        location.href='joinok.html'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}