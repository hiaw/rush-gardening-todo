import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { ToDo, Location } from "../data/todo";
import salesman from "@wemap/salesman.js";
import { useEffect, useState } from "react";
import { googleMapsApiKey } from "../data/apiKey";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -43.53171844691778,
  lng: 172.5660234539841,
};

type TodoMapProps = {
  todos: ToDo[];
};

export const TodoMap = ({ todos }: TodoMapProps) => {
  const [sortedLocation, setSortedLocation] = useState<Location[]>([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  useEffect(() => {
    const points = todos.map((todo) => {
      return new salesman.Point(todo.location?.lat!, todo.location?.lng!);
    });
    const solution = salesman.solve(points);

    setSortedLocation(
      solution.map((i) => ({
        lat: points[i].x,
        lng: points[i].y,
      })),
    );
  }, [todos]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={(map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
      }}
    >
      {todos.map((todo) => (
        <Marker
          key={todo.id}
          position={{ lat: todo.location?.lat!, lng: todo.location?.lng! }}
        />
      ))}
      <Polyline path={sortedLocation} />
    </GoogleMap>
  ) : null;
};
