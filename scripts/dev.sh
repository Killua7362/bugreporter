#!/bin/bash

# Run all commands in parallel and capture their output
docker-compose up & 
pnpm dev & 
pnpm db:studio &

# Store process IDs
DOCKER_PID=$!
DEV_PID=$!
STUDIO_PID=$!

# Function to handle script termination
cleanup() {
    echo "Shutting down all processes..."
    kill $DOCKER_PID $DEV_PID $STUDIO_PID
    exit 0
}

# Set up trap for cleanup on script termination
trap cleanup SIGINT SIGTERM

# Wait for all background processes
wait $DOCKER_PID $DEV_PID $STUDIO_PID
