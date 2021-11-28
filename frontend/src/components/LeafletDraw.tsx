import { EditControl } from "react-leaflet-draw";
import { FeatureGroup } from "react-leaflet";
export const LeafletDraw = () => {
  return (
    <div>
      <FeatureGroup>
        <EditControl
          position="topleft"
          /*
                onEdited={this._onEditPath}
                onCreated={this._onCreate}
                onDeleted={this._onDeleted}
                */
          draw={{
            rectangle: true,
          }}
        />
      </FeatureGroup>
    </div>
  );
};
