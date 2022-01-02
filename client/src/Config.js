import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { EXT_CONFIG_API } from './API/ApiConfig';

function Config() {
  const [fixedBanExts, setFixedBanExts] = useState([]);
  const [customBanExts, setCustomBanExts] = useState([]);

  useEffect(() => {
    getFixExtConfig();
  }, []);

  const getFixExtConfig = async () => {
    fetch(EXT_CONFIG_API)
      .then(res => res.json())
      .then(res => {
        const { result } = res;
        setFixedBanExts([...result]);
      });
  };

  const handleCheck = async event => {
    await fetch(EXT_CONFIG_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ extension: event.currentTarget.value }),
    });
    await getFixExtConfig();
  };

  return (
    <div className='Config'>
      <div>
        <h1>파일 확장자 차단</h1>
      </div>
      <form action=''>
        <div>
          <span>고정 확장자</span>
          {fixedBanExts.map(ext => {
            return (
              <label key={ext.id}>
                <input
                  type='checkbox'
                  name='extension'
                  onClick={handleCheck}
                  value={ext.extension_name}
                  checked={ext.is_banned}
                />
                {ext.extension_name}
              </label>
            );
          })}
        </div>
        <div>
          <span>커스텀 확장자</span>
          <input type='text' />
          <CustomConfigAddBtn type='button'>추가+</CustomConfigAddBtn>
        </div>
        <CustomConfig>test</CustomConfig>
        <SubmitBtn type='submit'>Save</SubmitBtn>
        <ResetBtn type='reset'>Reset</ResetBtn>
      </form>
    </div>
  );
}

export default Config;

const CustomConfig = styled.div`
  width: 300px;
  height: 200px;
  padding: 15px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  overflow-y: hidden;
  word-break: break-all;
`;

const SubmitBtn = styled.button``;
const ResetBtn = styled.button``;
const CustomConfigAddBtn = styled.button``;
const Exts = styled.span`
  margin-right: 10px;
`;
