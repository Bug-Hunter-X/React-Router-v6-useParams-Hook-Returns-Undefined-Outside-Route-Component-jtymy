The solution involves moving the `useParams` hook call inside a component that is rendered by a `<Route>` component.

```javascript
// Correct usage
function MyComponent() {
  return (
    <Routes>
      <Route path="/:id" element={<MyRouteComponent />} />
    </Routes>
  );
}

function MyRouteComponent() {
  const params = useParams();
  return (
    <div>
      <p>Parameter value: {params.id}</p>
    </div>
  );
}
```
This ensures that the `useParams` hook has access to the routing context and correctly retrieves the parameter values.