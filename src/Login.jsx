import React, { useState } from 'react';

export default function Login() {
    const [email,setEmail] = useState('');
    const [pw, setPw] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div classname="page">
            <div className="titleWrap">
                꿈나눔 로그인
            </div>

            <div className="contentWrap">
                <div className="InputTitle">아이디</div>
                <div className="InputWrap">
                    <input 
                    className="Input"
                    placeholder="test@gmail.com"
                    value={email}
                    onChange={handleEmail}/>
                </div>
                <div className="errorMessageWrap">
                    올바른 아이디를 입력해주세요.
                </div>

                <div className="InputTitle">비밀번호</div>
                <div className="InputWrap">
                    <input className="Input"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    value={pw}
                    />
                </div>
                <div className="errorMessageWrap">
                    영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </div>
            </div>
            <div>
                <button>
                    확인
                </button>
            </div>
        </div>

    );
}

