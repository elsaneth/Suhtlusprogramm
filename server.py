import asyncio
import websockets

connected = set()

async def handle_client(websocket):
    # Register client
    connected.add(websocket)
    print(f'Client {websocket.remote_address} connected.')
    try:
        async for message in websocket:
            # Broadcast received message to all connected clients
            print(f'Received message from {websocket.remote_address}: {message}')
            await asyncio.wait([client.send(message) for client in connected])
    finally:
        # Unregister client
        connected.remove(websocket)
        print(f'Client {websocket.remote_address} disconnected.')


async def main():
    async with websockets.serve(handle_client, "localhost", 12345):
        print("Server started...")
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())