function PhotoBooth() {
  return (
    <div className="flex gap-3">
      <div>
        <input
          type="file"
          accept="image/*,video/*"
          capture="environment"
          onClick={() => {}}
          className="w-24 h-24 bg-grey-100 border-dashed border-2 rounded-lg flex justify-center items-center bg-camera"
        />
      </div>
      <div>
        <input
          type="file"
          accept="image/*,video/*"
          onClick={() => {}}
          className="w-24 h-24 bg-grey-100 border-dashed border-2 rounded-lg flex justify-center items-center bg-add"
        />
      </div>
    </div>
  );
}

export default PhotoBooth;
