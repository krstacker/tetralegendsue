import input from "../../input.js"
import settings from "../../settings.js"

export default function segaRotate(arg) {
  /*if (piece.y + 1 < 4 && piece.shape === "I") {
	  return
  } else if (piece.y + 1 < 2) {
	  return
  }*/
  const piece = arg.piece
  let pieceShape = piece.shape
  let spawnY = piece.lowestY
  let pieceY = piece.y + spawnY
  if (piece.parent.rotationSystem === "auto" || piece.parent.rotationSystem === "sega") {
  if (pieceShape === "I") {
	  if (pieceY <= spawnY + 1) {
		  return
	  }
  } else {
	  if (pieceY <= spawnY) {
		  return
	  }
  }
  }
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
