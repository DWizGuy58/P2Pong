import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Board from "../components/Board"
import CubePiece from "../components/CubePiece"

export default function Home() {
  const numPlayers = 3;
  return (
    //<Board numPlayers= {numPlayers}/>
    <CubePiece />
  )
}
