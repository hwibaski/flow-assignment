import { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function CustomConfig(props) {
  const valueRef = useRef();
  const extensionName = valueRef.current?.innerText;
  const { extension, deleteCustomExtConfig } = props;

  return (
    <Exts>
      <span ref={valueRef}>{extension}</span>
      &nbsp;
      <TrashWrapper>
        <FontAwesomeIcon
          icon={faTrashAlt}
          size='sm'
          onClick={event => {
            deleteCustomExtConfig(event, extensionName);
          }}
        />
      </TrashWrapper>
    </Exts>
  );
}

export default CustomConfig;

const Exts = styled.span`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 3px;
  &:hover {
    background-color: #8b32ea;
    color: white;
  }
`;

const TrashWrapper = styled.span`
  cursor: pointer;
`;
