import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FixConfigBox from './Components/FixConfigBox';
import CustomConfig from './Components/CustomConfig';
import {
  FIX_EXT_CONFIG_API,
  CUSTOM_EXT_CONFIG_API,
  RESET_EXT_CONFIG_API,
} from '../../API/ApiConfig';

function Config() {
  const [fixedBanExts, setFixedBanExts] = useState([]);
  const [customBanExts, setCustomBanExts] = useState([]);
  const [customExtInput, setCustomExtInput] = useState('');

  useEffect(() => {
    getFixExtConfig();
    getCustomExtConfig();
  }, []);

  const getFixExtConfig = async () => {
    fetch(FIX_EXT_CONFIG_API)
      .then(res => res.json())
      .then(res => {
        const { result } = res;
        setFixedBanExts([...result]);
      });
  };

  const getCustomExtConfig = async () => {
    fetch(CUSTOM_EXT_CONFIG_API)
      .then(res => res.json())
      .then(res => {
        const { result } = res;
        setCustomBanExts([...result]);
      });
  };

  const handleFixExtCheck = async event => {
    await fetch(FIX_EXT_CONFIG_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        extension: event.currentTarget.value,
      }),
    });
    await getFixExtConfig();
  };

  const handleCustomExtInput = event => {
    setCustomExtInput(event.currentTarget.value);
  };

  const addCustomExtConfig = async () => {
    await fetch(CUSTOM_EXT_CONFIG_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        extension: customExtInput,
        tag: 'custom',
      }),
    });
    await getCustomExtConfig();
  };

  const deleteCustomExtConfig = async (event, extensionName) => {
    event.preventDefault();
    await fetch(CUSTOM_EXT_CONFIG_API, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        extension: extensionName,
      }),
    });
    await getCustomExtConfig();
  };

  const resetConfig = async () => {
    const answer = window.confirm(
      '모든 확장자 설정이 초기화 됩니다. 진행하시겠습니까?'
    );
    if (answer) {
      await fetch(RESET_EXT_CONFIG_API, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await getFixExtConfig();
      await getCustomExtConfig();
    }
  };

  return (
    <ConfigWrapper>
      <Title>파일 확장자 차단</Title>
      <FixConfigWrapper>
        <FixConfigTitle>고정 확장자</FixConfigTitle>
        {fixedBanExts.map(ext => {
          return (
            <FixConfigBox
              key={ext.id}
              handleFixExtCheck={handleFixExtCheck}
              extension={ext.extensionName}
              status={ext.isBanned}
            />
          );
        })}
      </FixConfigWrapper>
      <CustomConfigWrapper>
        <CustomConfigTitle>커스텀 확장자</CustomConfigTitle>
        <div>
          <CustomConfigInputWrapper>
            <input type='text' onChange={handleCustomExtInput} />
            <CustomConfigAddBtn type='button' onClick={addCustomExtConfig}>
              추가+
            </CustomConfigAddBtn>
          </CustomConfigInputWrapper>
          <CustomConfigInfo>
            {customBanExts.map(ext => {
              return (
                <CustomConfig
                  key={ext.id}
                  deleteCustomExtConfig={deleteCustomExtConfig}
                  extension={ext.extensionName}
                />
              );
            })}
          </CustomConfigInfo>
        </div>
      </CustomConfigWrapper>
      <ResetBtn type='button' onClick={resetConfig}>
        Reset
      </ResetBtn>
    </ConfigWrapper>
  );
}

export default Config;

const ConfigWrapper = styled.div`
  padding: 30px;
  font-family: 'Noto Sans KR', 'Roboto', 'Malgun Gothic', '맑은 고딕', helvetica,
    'Apple SD Gothic Neo', sans-serif;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
`;

const FixConfigWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CustomConfigWrapper = styled.form`
  display: flex;
`;

const CustomConfigTitle = styled.p`
  margin-right: 15px;
`;

const FixConfigTitle = styled.p`
  margin-right: 25px;
`;
const CustomConfigInputWrapper = styled.div`
  margin-bottom: 10px;
`;

const ResetBtn = styled.button`
  margin-top: 20px;
  margin-left: 450px;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background-color: #8b32ea;
  color: white;
  cursor: pointer;
`;

const CustomConfigAddBtn = styled.button`
  margin-left: 10px;
  padding: 5px;
  border: none;
  border-radius: 3px;
  background-color: #8b32ea;
  color: white;
  cursor: pointer;
`;

const CustomConfigInfo = styled.div`
  width: 400px;
  height: 200px;
  padding: 15px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  overflow-y: auto;
  word-break: break-all;
`;
