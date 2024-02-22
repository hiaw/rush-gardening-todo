import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { ToDo, Location, ToDoState } from "../data/todo";
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
    const includedTodos = todos.filter((todo) => {
      return todo.state === ToDoState.scheduled;
    });

    const points = includedTodos.map((todo) => {
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
      {sortedLocation.map((location) => (
        <Marker
          key={`${location.lat}-${location.lng}`}
          position={{ lat: location.lat, lng: location.lng }}
        />
      ))}
      <Polyline path={sortedLocation} />
    </GoogleMap>
  ) : null;
};
