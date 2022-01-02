import styled from 'styled-components';

function FixConfigBox(props) {
  const { extension, status, handleFixExtCheck } = props;
  return (
    <FixLabel>
      <input
        type='checkbox'
        name='extension'
        onChange={handleFixExtCheck}
        value={extension}
        checked={status}
      />
      {extension}
    </FixLabel>
  );
}

export default FixConfigBox;

const FixLabel = styled.label`
  margin-right: 5px;
`;
