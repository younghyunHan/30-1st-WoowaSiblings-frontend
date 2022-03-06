import './SelectItem.scss';

function SelectItem({ content }) {
  return (
    <div className="selectItem">
      <p>
        <strong className="commentMan" />
        {content}
      </p>
    </div>
  );
}

export default SelectItem;
