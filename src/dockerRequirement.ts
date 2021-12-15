import * as cwltsauto from 'cwl-ts-auto'

export function createMinimalDockerRequirement (): cwltsauto.DockerRequirement {
    return new cwltsauto.DockerRequirement({
        class_: 'DockerRequirement'
    })
}

/**
 * Specify a Docker image to retrieve using `docker pull`. Can contain the
 * immutable digest to ensure an exact container is used:
 * `dockerPull: ubuntu@sha256:45b23dee08af5e43a7fea6c4cf9c25ccf269ee113168c19722f87876677c5cb2`
 *
 */
export function assignDockerPull (dockerRequirement: cwltsauto.DockerRequirement, dockerPull: string): void {
    dockerRequirement.dockerPull = dockerPull
}

/**
 * Specify a HTTP URL from which to download a Docker image using `docker load`.
 */
export function assignDockerLoad (dockerRequirement: cwltsauto.DockerRequirement, dockerLoad: string): void {
    dockerRequirement.dockerLoad = dockerLoad
}

/**
 * Supply the contents of a Dockerfile which will be built using `docker build`.
 */
export function assignDockerFile (dockerRequirement: cwltsauto.DockerRequirement, dockerFile: string): void {
    dockerRequirement.dockerFile = dockerFile
}

/**
 * Provide HTTP URL to download and gunzip a Docker images using `docker import.
 */
export function assignDockerImport (dockerRequirement: cwltsauto.DockerRequirement, dockerImport: string): void {
    dockerRequirement.dockerImport = dockerImport
}

/**
 * The image id that will be used for `docker run`.  May be a
 * human-readable image name or the image identifier hash.  May be skipped
 * if `dockerPull` is specified, in which case the `dockerPull` image id
 * must be used.
 */
export function assignDockerImageId (dockerRequirement: cwltsauto.DockerRequirement, dockerImageId: string): void {
    dockerRequirement.dockerImageId = dockerImageId
}

/**
 * Set the designated output directory to a specific location inside the
 * Docker container.
 */
export function assignDockerOutputDirectory (dockerRequirement: cwltsauto.DockerRequirement, dockerOutputDirectory: string): void {
    dockerRequirement.dockerOutputDirectory = dockerOutputDirectory
}