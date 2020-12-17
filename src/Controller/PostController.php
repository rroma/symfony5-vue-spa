<?php

namespace App\Controller;

use App\Repository\PostRepository;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/post", name="app_post")
 */
class PostController extends AbstractFOSRestController
{
    /**
     * @Route("/", methods={"GET"}, name="list")
     *
     * @param PostRepository $postRepository
     *
     * @return Response
     */
    public function index(PostRepository $postRepository): Response
    {
        $posts = $postRepository->findAll();

        return $this->handleView($this->view($posts));
    }
}
