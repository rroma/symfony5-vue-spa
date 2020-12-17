<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /** @var UserPasswordEncoderInterface  */
    protected $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUsers($manager);

        $manager->flush();
    }

    protected function loadUsers(ObjectManager $manager)
    {
        $data = [
            [
                'email' => 'admin@photomap.com',
                'roles' => [User::ROLE_ADMIN],
                'password' => 'password',
            ]
        ];

        foreach ($data as $userData) {
            $user = new User();
            $user->setEmail($userData['email']);
            $user->setRoles($userData['roles']);
            $encoded = $this->encoder->encodePassword($user, $userData['password']);
            $user->setPassword($encoded);
            $manager->persist($user);
        }
    }
}
