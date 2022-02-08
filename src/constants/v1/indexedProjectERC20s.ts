import { NetworkName } from 'models/network-name'

export const indexedProjectERC20s: Partial<Record<NetworkName, number[]>> = {
  [NetworkName.mainnet]: [
    1, 2, 4, 7, 8, 13, 16, 21, 26, 27, 28, 31, 36, 37, 48, 52, 59, 63, 66, 67,
    70, 72, 77, 80, 82, 84, 85, 86, 89, 91, 101, 109, 110, 112, 114, 116, 117,
    118, 120, 121, 123, 128, 134, 135, 137, 138, 139, 140, 149, 157, 160, 161,
    162, 164, 168, 173, 175, 177, 178, 181, 187, 188, 189, 192, 193, 199, 200,
    201, 202, 204, 214, 218, 221, 223, 224, 227, 232, 233, 237, 246,
  ],
  [NetworkName.rinkeby]: [1, 4, 12, 20],
}