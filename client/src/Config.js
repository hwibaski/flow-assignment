import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FIX_EXT_CONFIG_API, CUSTOM_EXT_CONFIG_API } from './API/ApiConfig';

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

  const handleCustomInput = event => {
    setCustomExtInput(event.currentTarget.value);
  };

  const insertCustomExtConfig = async () => {
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

  const deleteCustomExtConfig = async event => {
    event.preventDefault();
    await fetch(CUSTOM_EXT_CONFIG_API, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        extension: event.currentTarget.innerText,
      }),
    });
    await getCustomExtConfig();
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
                  onChange={handleFixExtCheck}
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
          <input type='text' onChange={handleCustomInput} />
          <CustomConfigAddBtn type='button' onClick={insertCustomExtConfig}>
            추가+
          </CustomConfigAddBtn>
        </div>
        <CustomConfig>
          {customBanExts.map(ext => (
            <Exts key={ext.id} onClick={deleteCustomExtConfig}>
              {ext.extension_name}
              <FontAwesomeIcon icon={faTrashAlt} size='sm' />
            </Exts>
          ))}
        </CustomConfig>
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
